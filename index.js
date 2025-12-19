// index.js
(function(global) {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

  // Browser global variable
  global.colorPicker = {
    getRandomColor: getRandomColor
  };

  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      getRandomColor: getRandomColor
    };
  }
})(typeof window !== 'undefined' ? window : global);
