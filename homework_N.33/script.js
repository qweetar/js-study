"user strict"

var size = prompt("Введите размер часов от 200 до 1000");
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

function moveHourHand(currentHour, currentMinute) {
  var hourHand = document.getElementById("hHand");
  hourHand.style.height = size / 2.9 + "px";
  hourHand.style.width = size / 30 + "px";
  hourHand.style.backgroundColor = "black";
  hourHand.style.borderRadius = "10px";
  hourHand.style.position = "absolute";
  hourHand.style.transformOrigin = "50% 90%";
  clockHandCenter(mainCircle, hourHand);


  var hourAngle = currentHour * 30;
  hourAngle += currentMinute * 0.5;
  hourHand.style.transform = "rotate(" + hourAngle + "deg)";
}

function moveMinuteHand(currentMinute, currentSecond) {
  var minuteHand = document.getElementById("mHand");
  minuteHand.style.height = size / 2.5 + "px";
  minuteHand.style.width = size / 50 + "px";
  minuteHand.style.backgroundColor = "black";
  minuteHand.style.borderRadius = "10px";
  minuteHand.style.position = "absolute";
  minuteHand.style.transformOrigin = "50% 90%";
  clockHandCenter(mainCircle, minuteHand);


  var minuteAngle = currentMinute * 6;
  minuteAngle += currentSecond * 0.05;
  minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
}

function moveSecondHand(currentSecond) {
  var secondHand = document.getElementById("sHand");
  secondHand.style.height = size / 2.1 + "px";
  secondHand.style.width = size / 100 + "px";
  secondHand.style.backgroundColor = "red";
  secondHand.style.position = "absolute";
  secondHand.style.transformOrigin = "50% 90%";
  clockHandCenter(mainCircle, secondHand);


  var secondAngle = currentSecond * 6;
  secondHand.style.transform = "rotate(" + secondAngle + "deg)";
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

function createDigitWatch(mainCircle, clockSize) {
  var digitWatch = document.createElement("div");
  document.body.append(digitWatch);
  digitWatch.style.position = "absolute";
  digitWatch.style.height = clockSize / 8 + "px";
  digitWatch.style.width = clockSize / 4 + "px";

  var clockCenterX = mainCircle.offsetLeft + mainCircle.offsetWidth / 2;
  var clockCenterY = mainCircle.offsetTop + mainCircle.offsetHeight / 3;
  digitWatch.style.left = clockCenterX - digitWatch.offsetWidth/2 + "px";
  digitWatch.style.top = clockCenterY - digitWatch.offsetHeight + "px";

  var watch = document.createElement("span");
  digitWatch.append(watch);
  watch.style.position = "relative";
  watch.style.fontSize = clockSize / 2.5 + "%";
  digitWatch.style.textAlign = "center";
  watch.id = "watch";

}

function createMainCircle(circleSize) {
  var circle = document.createElement("div");
  document.body.append(circle);
  circle.style.position = "absolute";
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = "orange";
  circle.style.height = circleSize + "px";
  circle.style.width = circleSize + "px";
  circle.style.border = "solid 2px brown";

  return circle;
}

function createNumCircles(mainCircle, radiusCounter, clockSize) {
  for (var i = 1; i < 13; i++) {
    var numCircle = document.createElement("div");
    var num = document.createElement("span");
    num.append(i);
    num.style.position = "relative";
    num.style.fontSize = clockSize / 2.5 + "%";
    numCircle.style.textAlign = "center";
    num.style.top = "20%";
    document.body.append(numCircle);
    numCircle.append(num);
    numCircle.style.border = "solid 2px violet";
    numCircle.style.borderRadius = "50%";
    numCircle.style.backgroundColor = "purple";
    numCircle.style.height = clockSize / 8 + "px";
    numCircle.style.width = clockSize / 8 + "px";
    numCircle.style.position = "absolute";
    numCircle.id = i;
    radiusCounter += 30;

    var radius = parseFloat(mainCircle.style.height) / 2.4;
    var angle = radiusCounter/180 * Math.PI;

    var clockCenterX = mainCircle.offsetLeft + mainCircle.offsetWidth/2;
    var clockCenterY = mainCircle.offsetTop + mainCircle.offsetHeight/2;

    var numCircleCenterX = clockCenterX + radius * Math.sin(angle);
    var numCircleCenterY = clockCenterY - radius * Math.cos(angle);

    numCircle.style.left = Math.round(numCircleCenterX - numCircle.offsetWidth/2) + "px";
    numCircle.style.top = Math.round(numCircleCenterY - numCircle.offsetWidth/2) + "px" ;
  }
}

function createClockHands(mainCircle, clockSize) {
  var hourHand = document.createElement("div");
  document.body.append(hourHand);
  hourHand.id = "hHand";

  var minuteHand = document.createElement("div");
  document.body.append(minuteHand);
  minuteHand.id = "mHand";

  var secondHand = document.createElement("div");
  document.body.append(secondHand);
  secondHand.id = "sHand";
}

function clockHandCenter(clock, hand) {

  var clockCenterX = clock.offsetLeft + clock.offsetWidth / 2;
  var clockCenterY = clock.offsetTop + clock.offsetHeight / 2;
  hand.style.left = clockCenterX - hand.offsetWidth / 2 + "px";
  hand.style.top = clockCenterY - hand.offsetHeight * 0.9 + "px";
}
