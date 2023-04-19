const body = document.body;
const button = document.querySelector('button');
const output = document.querySelector('p');

function getRandom() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  const r = getRandom();
  const g = getRandom();
  const b = getRandom();
  const color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
  output.textContent = `The color is ${color}`;
}

button.addEventListener('click', changeColor);
