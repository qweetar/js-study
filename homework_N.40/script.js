"user strict"

var size = prompt("Введите размер часов от 200 до 1000");

var canvas = document.createElement("CANVAS");
document.body.append(canvas);
var ctx = canvas.getContext("2d");
canvas.width = size;
canvas.height = size;
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
var mainCircle;
updateTime();
setInterval(updateTime, 1000);


function createMainCircle() {
    var grad;
    var circle = ctx;
    circle.beginPath();
    circle.arc(0, 0, radius, 0, 2 * Math.PI);
    circle.fillStyle = "orange";
    circle.fill();
    circle.strokeStyle = "brown";
    circle.lineWidth = radius * 0.01;
    circle.stroke();

    return circle;
}

function createNumCircles(ctx, radius) {
  var numCircle = ctx;
  var numCircleRadius = radius / 8;
  var ang;
  for (i = 0; i < 13; i++) {
    numCircle.beginPath();
    ang = i * Math.PI / 6;
    numCircle.arc(numCircleCenterX, numCircleCenterY, numCircleRadius, 0, 2 * Math.PI);
    numCircle.rotate(ang);
    numCircle.translate(0, -radius * 0.8);
    numCircle.rotate(-ang);
    numCircle.rotate(ang);
    numCircle.translate(0, radius * 0.8);
    numCircle.rotate(-ang);
    numCircle.fillStyle = "purple";
    numCircle.strokeStyle = "violet";
    numCircle.lineWidth = radius * 0.015;
    numCircle.stroke();
    numCircle.fill();
    var numCircleCenterX = 0 + radius * Math.sin(ang) * 0.8;
    var numCircleCenterY = 0 - radius * Math.cos(ang) * 0.8;
  }

  var num = ctx;
  num.font = radius * 0.15 + "px times";
  num.textBaseline = "middle";
  num.textAlign = "center";
  for (i = 1; i < 13; i++) {
    ang = i * Math.PI / 6;
    num.rotate(ang);
    num.translate(0, -radius * 0.8);
    num.rotate(-ang);
    num.fillStyle = "black";
    num.fillText(i.toString(), 0, 0);
    num.rotate(ang);
    num.translate(0, radius * 0.8);
    num.rotate(-ang);
  }
}

function createDigitWatch(ctx, radius, time) {
  var digitWatchX = 0;
  var digitWatchY = 0 - radius * 0.4;
  var digitWatch = ctx;
  digitWatch.fillStyle = "orange";
  digitWatch.fillRect(digitWatchX - radius * 0.3, digitWatchY * 1.2, radius * 0.6, radius * 0.15);
  digitWatch.save();
  digitWatch.font = radius * 0.15 + "px times";
  digitWatch.textBaseline = "middle";
  digitWatch.textAlign = "center";
  digitWatch.fillStyle = "black";
  digitWatch.fillText(time, digitWatchX, digitWatchY);
}

function createClockHands(ctx, pos, length, width) {
  console.log(ctx);
  console.log(pos);
  console.log(length);
  console.log(width);
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.fillStyle = "black";
  ctx.stroke();
  ctx.rotate(-pos);
}

function updateTime() {
  var radiusCounter = 0;
  mainCircle = createMainCircle(ctx);
  createNumCircles(ctx, radius);
  var currTime = new Date();
  var time = str0l(currTime.getHours(), 2) + ":" + str0l(currTime.getMinutes(), 2) + ":" + str0l(currTime.getSeconds(), 2);
  createDigitWatch(ctx, radius, time);
  moveHourHand(currTime.getHours(), currTime.getMinutes());
  moveMinuteHand(currTime.getMinutes(), currTime.getSeconds());
  moveSecondHand(currTime.getSeconds());
}

function str0l(val,len) {
        var strVal=val.toString();
        while ( strVal.length < len )
            strVal='0'+strVal;
        return strVal;
}

function moveHourHand(currentHour, currentMinute) {
  var hourHand = currentHour % 12;
  hourHand = (hourHand * Math.PI / 6) + (currentMinute * Math.PI / (6 * 60));
  var hourHandLength = radius * 0.6;
  var hourHandWidth = radius * 0.07;
  ctx.strokeStyle = "black";
  createClockHands(ctx, hourHand, hourHandLength, hourHandWidth);
}

function moveMinuteHand(currentMinute, currentSecond) {
  var minuteHand = (currentMinute * Math.PI / 30) + (currentSecond * Math.PI / (30 * 60));
  var minuteHandLength = radius * 0.7;
  var minuteHandWidth = radius * 0.05;
  ctx.strokeStyle = "black";
  createClockHands(ctx, minuteHand, minuteHandLength, minuteHandWidth);
}

function moveSecondHand(currentSecond) {
  var secondHand = (currentSecond * Math.PI / 30);
  var secondHandLength = radius * 0.9;
  var secondHandWidth = radius * 0.02;
  ctx.strokeStyle = "red";
  createClockHands(ctx, secondHand, secondHandLength, secondHandWidth);
}
