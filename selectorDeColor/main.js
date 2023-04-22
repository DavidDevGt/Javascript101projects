const redSlider = document.querySelector('.red');
const greenSlider = document.querySelector('.green');
const blueSlider = document.querySelector('.blue');
const colorDisplay = document.querySelector('.color-display');
const rgbDisplay = document.querySelector('.rgb-display');

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorDisplay.style.backgroundColor = color;
    rgbDisplay.textContent = color;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);