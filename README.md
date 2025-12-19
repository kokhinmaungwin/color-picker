# Simple Color Picker

A simple random color picker utility for Node.js and browser environments.

## Installation

```bash
npm install @kokhinmaungwin/color-picker
```
---

## Usage in Node.js
```js
const colorPicker = require('@kokhinmaungwin/color-picker');

console.log(colorPicker.pickRandomColor());  // random hex color by default
```
## Usage in Browser (via CDN)
```html
<script src="https://cdn.jsdelivr.net/gh/kokhinmaungwin/color-picker@v1.0.4/dist/color-picker.min.js"></script>
<script>
  // Use the global variable `simpleColorPicker`
  const color = simpleColorPicker.pickRandomColor({ format: "hex" });
  console.log(color);
</script>
```
---

## API

- pickRandomColor(options)

Generate a random color string.

Options:

format (string): "hex" (default), "rgb", or "hsl"

hue (number): optional, 0-360

saturation (number): optional, 0-100

lightness (number): optional, 0-100

---


## Example:
```jsimpleColorPicker.pickRandomColor({ format: "hsl", hue: 180, saturation: 50, lightness: 50 });
## Demo
```
You can try the demo by opening the `demo/index.html` file in your browser:

```bash
open demo/index.html
```
---

## Licence 

MIT License © Khin Maung Win 

---
