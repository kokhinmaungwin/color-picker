<<<<<<< HEAD
// index.js
(function(global) {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // Browser global variable 
  global.simpleColorPicker = {
    pickRandomColor: getRandomColor
  };

  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      pickRandomColor: getRandomColor
    };
  }
})(typeof window !== 'undefined' ? window : global);
=======
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
>>>>>>> 2578b3c03ad990b29ca7a672adf604357c8bf41e
