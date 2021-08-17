//Draw rectangle
const Rectangle = () => {
  let x = parseInt(document.querySelector('#x').value);
  let y = parseInt(document.querySelector('#y').value);
  let height = parseInt(document.querySelector('#height').value);
  let width = parseInt(document.querySelector('#width').value);
  let colorR = parseInt(document.querySelector('#colorR').value);
  let colorG = parseInt(document.querySelector('#colorG').value);
  let colorB = parseInt(document.querySelector('#colorB').value);
  let color = `rgb(${colorR},${colorG},${colorB})`;
  let lineWidth = parseInt(document.querySelector('#line-width').value);

  drawRect(x, y, width, height, color, lineWidth);
};

const drawRect = (x, y, width, height, color, lineWidth) => {
  let canvas = document.querySelector('#canvasRectangle');
  let ctx = canvas.getContext('2d'); // Set canvas context 2d

  ctx.beginPath(); // Start draw path
  ctx.strokeStyle = color; // Set canvas color
  ctx.lineWidth = lineWidth; // Set canvas line width
  ctx.rect(x, y, width, height); // Save our Rectangle in storage
  ctx.stroke(); // Method who start draw
};

// Draw circle
const Circle = () => {
  let x = parseInt(document.querySelector('#x').value);
  let y = parseInt(document.querySelector('#y').value);
  let radius = parseInt(document.querySelector('#radius').value);
  let startAngle = parseInt(document.querySelector('#start').value);
  let endAngle = parseInt(document.querySelector('#end').value);
  let colorR = parseInt(document.querySelector('#colorR').value);
  let colorG = parseInt(document.querySelector('#colorG').value);
  let colorB = parseInt(document.querySelector('#colorB').value);
  let color = `rgb(${colorR},${colorG},${colorB})`;
  let lineWidth = parseInt(document.querySelector('#line-width').value);

  drawCircle(x, y, radius, startAngle, endAngle, color, lineWidth);
};

const drawCircle = (x, y, radius, startAngle, endAngle, color, lineWidth) => {
  let canvas = document.querySelector('#canvasCircle');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI);
  ctx.stroke();
};

const ManyPaths = () => {
  console.log('dupa');
  let canvas = document.querySelector('#canvasManyPaths');
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;

  ctx.moveTo(240, 30);
  ctx.lineTo(270, 75);
  ctx.lineTo(210, 75);
  ctx.lineTo(240, 30);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = 'yellow';
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.lineWidth = 5;
  ctx.moveTo(120, 30);
  ctx.lineTo(150, 75);
  ctx.lineTo(90, 75);
  ctx.lineTo(120, 30);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = 'red';
  ctx.fill();
};
