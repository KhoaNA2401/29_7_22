// ctx.font = "30px Arial";
// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
// ctx.strokeText("^_^", 55, 80);

// ctx.stroke();

// ctx.beginPath();
// ctx.arc(240, 240, 150, 0, Math.PI * 2, true);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(180, 180, 20, 0, Math.PI * 2, true);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(300, 180, 20, 0, Math.PI * 2, true);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(240, 230);
// ctx.lineTo(240, 280);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(240, 300, 50, 0, Math.PI );
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.stroke();
var c = document.getElementById("myFaceText");
var ctx = c.getContext("2d");
const WIDTH = c.width;
const HEIGHT = c.height;
const FPS = 60;
function smileFace() {
  ctx.beginPath();
  ctx.arc(550, 230, 150, 0, Math.PI * 2, true);
  ctx.moveTo(480, 150);
  ctx.lineTo(520, 200);
  ctx.moveTo(480, 150);
  ctx.lineTo(455, 200);
  ctx.moveTo(625, 150);
  ctx.lineTo(600, 200);
  ctx.moveTo(625, 150);
  ctx.lineTo(660, 200);

  ctx.stroke();
}
function slient() {
  ctx.beginPath();
  ctx.moveTo(540, 300);
  ctx.lineTo(580, 300);
  ctx.stroke();
}
let tonguesize = 50;
var delayInMilliseconds = 1000;
function tongue() {
  ctx.beginPath();
  ctx.moveTo(540, 300);
  ctx.bezierCurveTo(550, 360, 580, 360, 580, 300);
  ctx.moveTo(560, 300);
  ctx.lineTo(560, 330);
  ctx.moveTo(540, 300);
  ctx.lineTo(580, 300);

  ctx.stroke();
}
let startFrameTime = Date.now();

let bool = true;

function SmileLoop() {
  document.getElementById("myFaceText");
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  let currentFrameTime = Date.now();
  let deltaTime = currentFrameTime - startFrameTime;
  let actualFPS = 1000 / deltaTime;
  ctx.textStyle = "20px Arial";
  ctx.fillText("FPS:" + actualFPS.toFixed(2), 10, 30);
  ctx.closePath();
  if (bool) {
    tongue();
    bool = !bool;
  } else {
    slient();
    bool = !bool;
  }

  smileFace();
  startFrameTime = currentFrameTime;
  console.log(count);
}

setInterval(SmileLoop, 1000);
