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
  ctx.strokeStyle = color; //set brush color
  ctx.lineWidth = lineWidth; //set brush width
  ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI);
  ctx.stroke();
};

const ManyPaths = () => {
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

const SimpleTransforms = () => {
  let canvas = document.querySelector('#canvasSimpleTransforms');
  let ctx = canvas.getContext('2d');

  // 1

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  let angle = (45 * Math.PI) / 180;
  let x = 25;
  let y = 25;
  let width = 100;
  let height = 100;

  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angle);
  ctx.fillStyle = 'yellow'; // set body color
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  // 2

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  angle = (75 * Math.PI) / 180;
  x = 75;
  y = 25;
  width = 100;
  height = 100;

  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angle);
  ctx.fillStyle = 'orange';
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  // 3

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  angle = (90 * Math.PI) / 180;
  x = 125;
  y = 25;
  width = 100;
  height = 100;

  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angle);
  ctx.fillStyle = 'pink';
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

  // 4

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  angle = (120 * Math.PI) / 180;
  x = 175;
  y = 25;
  width = 100;
  height = 100;

  ctx.translate(x + 0.5 * width, y + 0.5 * height);
  ctx.rotate(angle);
  ctx.fillStyle = 'purple';
  ctx.fillRect(-0.5 * width, -0.5 * height, width, height);
};

const Gradient = () => {
  let canvas = document.querySelector('#canvasGradient');
  let ctx = canvas.getContext('2d');
  let XStartPoint = parseInt(document.querySelector('#xstartpoint').value);
  let YStartPoint = parseInt(document.querySelector('#ystartpoint').value);
  let XEndPoint = parseInt(document.querySelector('#xendpoint').value);
  let YEndPoint = parseInt(document.querySelector('#yendpoint').value);

  let gradient = ctx.createLinearGradient(XStartPoint, YStartPoint, XEndPoint, YEndPoint);
  gradient.addColorStop(0, 'rgb(123,211,102)'); //Add color to gradient
  gradient.addColorStop(0.5, 'rgb(56,299,102)');
  gradient.addColorStop(1, 'rgb(20,211,102)');

  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, 130, 130);
  ctx.fillRect(0, 130, 70, 150);
  ctx.fillRect(90, 130, 200, 240);
};

const RombGradient = () => {
  let canvas = document.querySelector('#canvasRombGradient');
  let ctx = canvas.getContext('2d');
  let XStartPoint = parseInt(document.querySelector('#xstartpoint').value);
  let YStartPoint = parseInt(document.querySelector('#ystartpoint').value);
  let XEndPoint = parseInt(document.querySelector('#xendpoint').value);
  let YEndPoint = parseInt(document.querySelector('#yendpoint').value);

  let gradient = ctx.createLinearGradient(XStartPoint, YStartPoint, XEndPoint, YEndPoint);
  gradient.addColorStop(0, 'rgb(255,150,102)');
  gradient.addColorStop(0.5, 'rgb(255,100,102)');
  gradient.addColorStop(1, 'rgb(255,1,102)');

  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineTo(200, 75);
  ctx.lineTo(100, 150);
  ctx.lineTo(0, 75);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

const RadialGradient = () => {
  let canvas = document.querySelector('#canvasArcGradient');
  let ctx = canvas.getContext('2d');
  let XStartPoint = parseInt(document.querySelector('#xstartpoint').value);
  let YStartPoint = parseInt(document.querySelector('#ystartpoint').value);
  let XEndPoint = parseInt(document.querySelector('#xendpoint').value);
  let YEndPoint = parseInt(document.querySelector('#yendpoint').value);
  let startRadial = parseInt(document.querySelector('#startradial').value);
  let endRadial = parseInt(document.querySelector('#endradial').value);

  let gradient = ctx.createRadialGradient(XStartPoint, YStartPoint, startRadial, XEndPoint, YEndPoint, endRadial);
  gradient.addColorStop(0, 'rgb(255,150,255)');
  gradient.addColorStop(0.5, 'rgb(255,100,255)');
  gradient.addColorStop(1, 'rgb(255,1,255)');

  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, 150, 150);
};

const drawImage = () => {
  let canvas = document.querySelector('#canvasImageInFigure');
  let ctx = canvas.getContext('2d');

  let image = new Image();
  image.src = 'https://picsum.photos/30/30';
  image.width = '20';

  image.addEventListener('load', () => {
    let pattern1 = ctx.createPattern(image, 'no-repeat');
    let pattern2 = ctx.createPattern(image, 'repeat-x');
    let pattern3 = ctx.createPattern(image, 'repeat-y');

    ctx.fillStyle = pattern1;
    ctx.fillRect(0, 0, 20, 20);

    ctx.fillStyle = pattern3;
    ctx.fillRect(0, 25, 20, 80);
    ctx.translate(0, 110);

    ctx.fillStyle = pattern2;
    ctx.fillRect(0, 0, 120, 20);
  })
}