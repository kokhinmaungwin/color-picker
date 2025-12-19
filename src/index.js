(function(global) {
  // Helper functions for color formats
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
  }

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex.split("").map(h => h + h).join("");
    }
    const intVal = parseInt(hex, 16);
    return {
      r: (intVal >> 16) & 255,
      g: (intVal >> 8) & 255,
      b: intVal & 255
    };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if(max === min){
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100)};
  }

  function hslToRgb(h, s, l){
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;

    if(s === 0){
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
  }

  // Generate random color with optional control over hue, saturation, lightness
  function getRandomColor(options = {}) {
    let { format = "hex", hue = null, saturation = null, lightness = null } = options;

    // Random HSL generation
    let h = hue !== null ? hue : Math.floor(Math.random() * 360);
    let s = saturation !== null ? saturation : Math.floor(Math.random() * 100);
    let l = lightness !== null ? lightness : Math.floor(Math.random() * 100);

    // Clamp values
    h = Math.min(360, Math.max(0, h));
    s = Math.min(100, Math.max(0, s));
    l = Math.min(100, Math.max(0, l));

    const rgb = hslToRgb(h, s, l);

    if (format === "rgb") {
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else if (format === "hsl") {
      return `hsl(${h}, ${s}%, ${l}%)`;
    } else {
      // Default hex
      return rgbToHex(rgb.r, rgb.g, rgb.b);
    }
  }

  // Generate a palette of random colors
  function generatePalette(count = 5, options = {}) {
    const palette = [];
    for(let i = 0; i < count; i++) {
      palette.push(getRandomColor(options));
    }
    return palette;
  }

  // Export as browser global & Node module
  const colorPicker = {
    pickRandomColor: getRandomColor,
    generatePalette: generatePalette,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    rgbToHsl: rgbToHsl,
    hslToRgb: hslToRgb,
  };

  if(typeof module !== "undefined" && module.exports) {
    module.exports = colorPicker;
  } else {
    global.simpleColorPicker = colorPicker;
  }

})(typeof window !== "undefined" ? window : global);
