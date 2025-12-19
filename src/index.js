(function (global) {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
  }

  // Browser usage
  global.simpleColorPicker = {
    pickRandomColor: getRandomColor,
  };

  // Node.js / ESM usage
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { pickRandomColor: getRandomColor };
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return { pickRandomColor: getRandomColor };
    });
  }
})(typeof window !== "undefined" ? window : global);
