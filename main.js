// BRIGHTNESS IPO CALC BY MR. V

// Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Input Values
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  // Validate Input Values - rgb values must be between 0 and 255
  if (r < 0) {
    r = 0;
    document.getElementById("r-in").value = 0;
  } else if (r > 255) {
    r = 255;
    document.getElementById("r-in").value = 255;
  }

  if (g < 0) {
    g = 0;
    document.getElementById("g-in").value = 0;
  } else if (g > 255) {
    g = 255;
    document.getElementById("g-in").value = 255;
  }

  if (b < 0) {
    b = 0;
    document.getElementById("b-in").value = 0;
  } else if (b > 255) {
    b = 255;
    document.getElementById("b-in").value = 255;
  }

  // Calculate & Output Brightness
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  brightness = Math.round(brightness);
  document.getElementById("bright").innerHTML = brightness;

  // Update rgb preview: brightness > 160 -> black text, else white text
  let rgbString = `rgb(${r}, ${g}, ${b})`;
  document.getElementById("rgb-preview").innerHTML = rgbString;
  document.getElementById("rgb-preview").style.backgroundColor = rgbString;
  if (brightness > 160) {
    document.getElementById("rgb-preview").style.color = "black";
  } else {
    document.getElementById("rgb-preview").style.color = "white";
  }
}
