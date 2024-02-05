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
  let rIn = +rInEl.value;
  let gIn = +gInEl.value;
  let bIn = +bInEl.value;

  // Constrain Input Values - rgb values must be between 0 and 255
  rIn = constrain(rIn, 0, 255);
  rInEl.value = rIn;

    gIn = constrain(gIn, 0, 255);
  gInEl.value = gIn;

  bIn = constrain(bIn, 0, 255)
  bInEl.value = bIn;

  // Calculate & Output Brightness
  let brightness = calcBrightness(rIn, gIn, bIn)
  brightEl.innerHTML = brightness;

  // Update rgb preview: brightness > 160 -> black text, else white text
  let rgbString = `rgb(${rIn}, ${gIn}, ${bIn})`;
  previewEl.innerHTML = rgbString;
  previewEl.style.backgroundColor = rgbString;
  previewEl.style.color = getSmartFont(brightness);
}

//Helper Functions
function calcBrightness(r, g, b) {
return Math.round(Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2));
}

function constrain(val, low, high) {
  if (val < low) {
    return low;
  }
else if (val > high) {
return high;
} else {
  return val;
}
}

function getSmartFont(brightValue) {
  if (brightValue > 160) {
    return  "black";
  } else { 
    return "white"

  }
}
