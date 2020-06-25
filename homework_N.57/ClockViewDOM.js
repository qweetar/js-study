"user strict"

class ClockViewDOM {
  constructor(myDiv, xId, currTime) {
    this.myDiv = myDiv;
    this.xId = xId;
    this.size = myDiv.offsetWidth * 0.95;
    this.mainCircle = this.createClock(this.size);
    this.currTime = currTime;
  }

  createClock(clockSize) {
    var radiusCounter = 0;
    var mainCircle = this.createMainCircle(clockSize);
    this.createNumCircles(mainCircle, radiusCounter, clockSize)
    this.createClockHands(mainCircle, clockSize);
    this.createDigitWatch(mainCircle, clockSize);
    return mainCircle;
  }

  moveHourHand(currentHour, currentMinute) {
    var hourHand = document.getElementById("hHand" + this.xId);
    hourHand.style.height = this.size / 2.9 + "px";
    hourHand.style.width = this.size / 30 + "px";
    hourHand.style.backgroundColor = "black";
    hourHand.style.borderRadius = "10px";
    hourHand.style.position = "absolute";
    hourHand.style.transformOrigin = "50% 90%";
    this.clockHandCenter(this.mainCircle, hourHand);


    var hourAngle = currentHour * 30;
    hourAngle += currentMinute * 0.5;
    hourHand.style.transform = "rotate(" + hourAngle + "deg)";
  }

  moveMinuteHand(currentMinute, currentSecond) {
    var minuteHand = document.getElementById("mHand" + this.xId);
    minuteHand.style.height = this.size / 2.5 + "px";
    minuteHand.style.width = this.size / 50 + "px";
    minuteHand.style.backgroundColor = "black";
    minuteHand.style.borderRadius = "10px";
    minuteHand.style.position = "absolute";
    minuteHand.style.transformOrigin = "50% 90%";
    this.clockHandCenter(this.mainCircle, minuteHand);


    var minuteAngle = currentMinute * 6;
    minuteAngle += currentSecond * 0.05;
    minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
  }

  moveSecondHand(currentSecond) {
    var secondHand = document.getElementById("sHand" + this.xId);
    secondHand.style.height = this.size / 2.1 + "px";
    secondHand.style.width = this.size / 100 + "px";
    secondHand.style.backgroundColor = "red";
    secondHand.style.position = "absolute";
    secondHand.style.transformOrigin = "50% 90%";
    this.clockHandCenter(this.mainCircle, secondHand);


    var secondAngle = currentSecond * 6;
    secondHand.style.transform = "rotate(" + secondAngle + "deg)";
  }

  updateTime(currTime) {
    currTime = new Date(currTime);
    var time = str0l(currTime.getHours(), 2) + ":" + str0l(currTime.getMinutes(), 2) + ":" + str0l(currTime.getSeconds(), 2);
    document.getElementById("watch" + this.xId).innerHTML = time;
    this.moveHourHand(currTime.getHours(), currTime.getMinutes());
    this.moveMinuteHand(currTime.getMinutes(), currTime.getSeconds());
    this.moveSecondHand(currTime.getSeconds());

    function str0l(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
                strVal='0'+strVal;
            return strVal;
    }
  }

  createDigitWatch(mainCircle, clockSize) {
    var digitWatch = document.createElement("div");
    this.myDiv.append(digitWatch);
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
    watch.id = "watch" + this.xId;
  }

  createMainCircle(circleSize) {
    var circle = document.createElement("div");
    this.myDiv.append(circle);
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "orange";
    circle.style.height = circleSize + "px";
    circle.style.width = circleSize + "px";
    circle.style.border = "solid 2px brown";

    return circle;
  }

  createNumCircles(mainCircle, radiusCounter, clockSize) {
    for (var i = 1; i < 13; i++) {
      var numCircle = document.createElement("div");
      var num = document.createElement("span");
      num.append(i);
      num.style.position = "relative";
      num.style.fontSize = clockSize / 2.5 + "%";
      numCircle.style.textAlign = "center";
      num.style.top = "20%";
      this.myDiv.append(numCircle);
      numCircle.append(num);
      numCircle.style.border = "solid 2px violet";
      numCircle.style.borderRadius = "50%";
      numCircle.style.backgroundColor = "purple";
      numCircle.style.height = clockSize / 8 + "px";
      numCircle.style.width = clockSize / 8 + "px";
      numCircle.style.position = "absolute";
      numCircle.id = i + this.xId;
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

  createClockHands(mainCircle, clockSize) {
    var hourHand = document.createElement("div");
    this.myDiv.append(hourHand);
    hourHand.id = "hHand" + this.xId;

    var minuteHand = document.createElement("div");
    this.myDiv.append(minuteHand);
    minuteHand.id = "mHand" + this.xId;

    var secondHand = document.createElement("div");
    this.myDiv.append(secondHand);
    secondHand.id = "sHand" + this.xId;
  }

  clockHandCenter(clock, hand) {

    var clockCenterX = clock.offsetLeft + clock.offsetWidth / 2;
    var clockCenterY = clock.offsetTop + clock.offsetHeight / 2;
    hand.style.left = clockCenterX - hand.offsetWidth / 2 + "px";
    hand.style.top = clockCenterY - hand.offsetHeight * 0.9 + "px";
  }

}
