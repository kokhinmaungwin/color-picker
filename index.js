// simple-color-picker/index.js

/**
 * Generate a random hex color string.
 * @returns {string} Random hex color code, e.g. "#3e92cc"
 */
function getRandomColor() {
  // Generate random number between 0 and 0xFFFFFF
  const randomInt = Math.floor(Math.random() * 0xffffff);
  // Convert to hex and pad with zeros if needed
  const hex = randomInt.toString(16).padStart(6, '0');
  return `#${hex}`;
}

module.exports = {
  getRandomColor,
};
