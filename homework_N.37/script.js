"user strict"

var size = prompt("Введите размер часов от 200 до 1000");
var ns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(ns, "svg");
document.body.append(svg);
svg.setAttributeNS(null, "width", size);
svg.setAttributeNS(null, "height", size);
createClock(size);

var mainCircle;

function createClock(clockSize) {
  var radiusCounter = 0;
  mainCircle = createMainCircle(clockSize);
  createNumCircles(mainCircle, radiusCounter, clockSize)
  createClockHands(mainCircle, clockSize);
  createDigitWatch(mainCircle, clockSize);
  updateTime();
  setInterval(updateTime, 1000);
}

function createMainCircle(circleSize) {
  var circle = document.createElementNS(ns, "circle");
  circle.setAttribute("fill", "orange");
  circle.setAttribute("stroke", "brown");
  circle.setAttribute("r", circleSize / 2);
  circle.setAttribute("cx", circleSize / 2);
  circle.setAttribute("cy", circleSize / 2);
  svg.append(circle);

  return circle;
}

function createNumCircles(mainCircle, radiusCounter, clockSize) {
  for (var i = 1; i < 13; i++) {
    var numCircle = document.createElementNS(ns, "circle");
    document.body.append(numCircle);
    numCircle.setAttribute("stroke", "violet");
    numCircle.setAttribute("fill", "purple");
    numCircle.setAttribute("r", clockSize / 16);
    numCircle.id = i;
    radiusCounter += 30;
    var radius = parseFloat(mainCircle.getAttribute("r")) / 1.2;
    var angle = radiusCounter/180 * Math.PI;
    var clockCenterX = parseFloat(mainCircle.getAttribute("cx"));
    var clockCenterY = parseFloat(mainCircle.getAttribute("cy"));
    var numCircleCenterX = clockCenterX + radius * Math.sin(angle);
    var numCircleCenterY = clockCenterY - radius * Math.cos(angle);
    numCircle.setAttribute("cx", numCircleCenterX);
    numCircle.setAttribute("cy", numCircleCenterY);
    svg.append(numCircle);

    var num = document.createElementNS(ns, "text");
    num.textContent = i;
    num.style.fill = "black";
    num.setAttribute("font-size", size / 15);
    var numAlignIndex = 4;
    if (i > 9)
    numAlignIndex = 2;
    var numX = Math.round(numCircleCenterX - parseFloat(numCircle.getAttribute("r")/numAlignIndex)) + "px";
    var numY = Math.round(numCircleCenterY + parseFloat(numCircle.getAttribute("r")/3)) + "px" ;
    num.setAttribute("x", numX);
    num.setAttribute("y", numY);
    svg.append(num);
  }
}

function createDigitWatch(mainCircle, clockSize) {
  var digitWatch = document.createElementNS(ns, "text");
  digitWatch.style.fill = "black";
  digitWatch.setAttribute("font-size", size / 15);
  var clockCenterX = parseFloat(mainCircle.getAttribute("cx"));
  var clockCenterY = parseFloat(mainCircle.getAttribute("cy"));
  digitWatch.setAttribute("x", clockCenterX - size / 9);
  digitWatch.setAttribute("y", clockCenterY - size / 5);
  digitWatch.id = "watch";
  svg.append(digitWatch);
}

function updateTime() {
  var currTime = new Date();
  var time = str0l(currTime.getHours(), 2) + ":" + str0l(currTime.getMinutes(), 2) + ":" + str0l(currTime.getSeconds(), 2);
  document.getElementById("watch").innerHTML = time;
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

function createClockHands(mainCircle, clockSize) {
  var hourHand = document.createElementNS(ns, "line");
  hourHand.setAttribute("stroke", "black");
  hourHand.setAttribute("stroke-linecap", "round");
  hourHand.setAttribute("stroke-width", size / 40);
  hourHand.setAttribute("y2", size / 2 - mainCircle.getAttribute("cy") * 0.6);
  hourHand.id = "hHand";
  svg.append(hourHand);
  var minuteHand = document.createElementNS(ns, "line");
  minuteHand.setAttribute("stroke", "black");
  minuteHand.setAttribute("stroke-linecap", "round");
  minuteHand.setAttribute("stroke-width", size / 70);
  minuteHand.setAttribute("y2", size / 2 - mainCircle.getAttribute("cy") * 0.8);
  minuteHand.id = "mHand";
  svg.append(minuteHand);

  var secondHand = document.createElementNS(ns, "line");
  secondHand.setAttribute("stroke", "red");
  secondHand.setAttribute("stroke-linecap", "round");
  secondHand.setAttribute("stroke-width", size / 120);
  secondHand.setAttribute("y2", size / 2 - mainCircle.getAttribute("cy") * 0.9);
  secondHand.id = "sHand";
  svg.append(secondHand);
}

function clockHandCenter(clock, hand) {
var clockCenterX = parseFloat(clock.getAttribute("cx"));
var clockCenterY = parseFloat(clock.getAttribute("cy"));
var x2 = hand.setAttribute("x1", clockCenterX);
var y2 = hand.setAttribute("y1", clockCenterY / 0.9);
var x1 = hand.setAttribute("x2", clockCenterX - hand.getAttribute("stroke-width") / 2);
}
function moveHourHand(currentHour, currentMinute) {
  var hourHand = document.getElementById("hHand");
  var hourAngle = currentHour * 30;
  hourAngle += currentMinute * 0.5;
  clockHandCenter(mainCircle, hourHand);
  var x = parseFloat(hourHand.getAttribute("x1"));
  var y = hourHand.getAttribute("y1") * 0.9;
  hourHand.setAttribute("transform", "rotate(" + hourAngle + " " + x + " " + y + ")");
}

function moveMinuteHand(currentMinute, currentSecond) {
  var minuteHand = document.getElementById("mHand");
  var minuteAngle = currentMinute * 6;
  minuteAngle += currentSecond * 0.05;
  clockHandCenter(mainCircle, minuteHand);
  var x = parseFloat(minuteHand.getAttribute("x1"));
  var y = minuteHand.getAttribute("y1") * 0.9;
  minuteHand.setAttribute("transform", "rotate(" + minuteAngle + " " + x + " " + y + ")");

}

function moveSecondHand(currentSecond) {
  var secondHand = document.getElementById("sHand");
  var secondAngle = currentSecond * 6;
  clockHandCenter(mainCircle, secondHand);
  var x = secondHand.getAttribute("x1");
  var y = secondHand.getAttribute("y1") * 0.9;
  secondHand.setAttribute("transform", "rotate(" + secondAngle + " " + x + " " + y + ")");
}
