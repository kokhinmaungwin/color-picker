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
