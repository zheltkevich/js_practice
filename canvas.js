// DOM-элемент канваса
let canvas = document.getElementById('canvas');

// Контекст отрисовки
let ctx = canvas.getContext('2d');

// let gradient = ctx.createRadialGradient(150, 72, 0, 150, 72, 72);
// gradient.addColorStop(0, 'green');
// gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

// ctx.fillStyle = gradient;
// ctx.fillRect(0, 0, 300, 150);

// ctx.strokeStyle = 'blue';
// ctx.strokeRect(75, 0, 150, 150);

// ctx.clearRect(0, 0, 150, 150);

// -----------------------
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(80,60);
// ctx.lineTo(110,80);
// ctx.lineTo(125,40);
// ctx.lineTo(140,80);
// ctx.lineTo(170,60);
// ctx.lineTo(150,100);
// ctx.lineTo(150,100);
// ctx.bezierCurveTo(140, 90, 110, 90, 100, 100,);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

// -----------------------
// ctx.beginPath();
// ctx.moveTo(150, 0);
// ctx.lineTo(195, 130);
// ctx.lineTo(80, 50);
// ctx.lineTo(220, 50);
// ctx.lineTo(105, 130);
// ctx.lineTo(150, 0);
// ctx.stroke();
// // ctx.fill();
// ctx.fill('evenodd');

// -----------------------
ctx.font = '30px Tahoma';
ctx.textBaseline = 'hanging';
ctx.fillText('Привет из текста', 0, 10);
ctx.fillText('в канвасе!', 0, 48);