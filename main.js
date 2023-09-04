// BRIGHTNESS IPO CALC BY MR. V

// HTML Variables
let rInEl = document.getElementById("r-in");
let gInEl = document.getElementById("g-in");
let bInEl = document.getElementById("b-in");
let brightEl = document.getElementById("bright");
let previewEl = document.getElementById("preview");

// Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Input Values
  let r = +rInEl.value;
  let g = +gInEl.value;
  let b = +bInEl.value;

  // Validate Input Values - rgb values must be between 0 and 255
  if (r < 0) {
    r = 0;
    rInEl.value = 0;
  } else if (r > 255) {
    r = 255;
    rInEl.value = 255;
  }

  if (g < 0) {
    g = 0;
    gInEl.value = 0;
  } else if (g > 255) {
    g = 255;
    gInEl.value = 255;
  }

  if (b < 0) {
    b = 0;
    bInEl.value = 0;
  } else if (b > 255) {
    b = 255;
    bInEl.value = 255;
  }

  // Calculate & Output Brightness
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  brightness = Math.round(brightness);
  brightEl.innerHTML = brightness;

  // Update rgb preview: brightness > 160 -> black text, else white text
  let rgbString = `rgb(${r}, ${g}, ${b})`;
  previewEl.innerHTML = rgbString;
  previewEl.style.backgroundColor = rgbString;
  if (brightness > 160) {
    previewEl.style.color = "black";
  } else {
    previewEl.style.color = "white";
  }
}
