"user strict"

class ClockViewSVG {
  constructor(myDiv, xId) {
    this.ns = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS(this.ns, "svg");
    this.myDiv = myDiv;
    this.xId = xId;
    this.size = myDiv.offsetWidth * 0.95;
    this.mainCircle = this.createClock(this.size);
    this.myDiv.append(this.svg);
    this.svg.setAttributeNS(null, "width", this.size);
    this.svg.setAttributeNS(null, "height", this.size);
  }

  createClock(clockSize) {
    var radiusCounter = 0;
    var mainCircle = this.createMainCircle(clockSize);
    this.createNumCircles(mainCircle, radiusCounter, clockSize)
    this.createClockHands(mainCircle, clockSize);
    this.createDigitWatch(mainCircle, clockSize);
    return mainCircle;
  }

  createMainCircle(circleSize) {
    var circle = document.createElementNS(this.ns, "circle");
    circle.setAttribute("fill", "orange");
    circle.setAttribute("stroke", "brown");
    circle.setAttribute("r", circleSize / 2);
    circle.setAttribute("cx", circleSize / 2);
    circle.setAttribute("cy", circleSize / 2);
    this.svg.append(circle);

    return circle;
  }

  createNumCircles(mainCircle, radiusCounter, clockSize) {
    for (var i = 1; i < 13; i++) {
      var numCircle = document.createElementNS(this.ns, "circle");
      document.body.append(numCircle);
      numCircle.setAttribute("stroke", "violet");
      numCircle.setAttribute("fill", "purple");
      numCircle.setAttribute("r", clockSize / 16);
      numCircle.id = i + this.xId;
      radiusCounter += 30;
      var radius = parseFloat(mainCircle.getAttribute("r")) / 1.2;
      var angle = radiusCounter/180 * Math.PI;
      var clockCenterX = parseFloat(mainCircle.getAttribute("cx"));
      var clockCenterY = parseFloat(mainCircle.getAttribute("cy"));
      var numCircleCenterX = clockCenterX + radius * Math.sin(angle);
      var numCircleCenterY = clockCenterY - radius * Math.cos(angle);
      numCircle.setAttribute("cx", numCircleCenterX);
      numCircle.setAttribute("cy", numCircleCenterY);
      this.svg.append(numCircle);

      var num = document.createElementNS(this.ns, "text");
      num.textContent = i;
      num.style.fill = "black";
      num.setAttribute("font-size", this.size / 15);
      var numAlignIndex = 4;
      if (i > 9)
      numAlignIndex = 2;
      var numX = Math.round(numCircleCenterX - parseFloat(numCircle.getAttribute("r")/numAlignIndex)) + "px";
      var numY = Math.round(numCircleCenterY + parseFloat(numCircle.getAttribute("r")/3)) + "px" ;
      num.setAttribute("x", numX);
      num.setAttribute("y", numY);
      this.svg.append(num);
    }
  }

  createDigitWatch(mainCircle, clockSize) {
    var digitWatch = document.createElementNS(this.ns, "text");
    digitWatch.style.fill = "black";
    digitWatch.setAttribute("font-size", this.size / 15);
    var clockCenterX = parseFloat(mainCircle.getAttribute("cx"));
    var clockCenterY = parseFloat(mainCircle.getAttribute("cy"));
    digitWatch.setAttribute("x", clockCenterX - this.size / 9);
    digitWatch.setAttribute("y", clockCenterY - this.size / 5);
    digitWatch.id = "watch" + this.xId;
    this.svg.append(digitWatch);
  }

  updateTime(currTime) {
    var currTime = new Date(currTime);
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

  createClockHands(mainCircle, clockSize) {
    var hourHand = document.createElementNS(this.ns, "line");
    hourHand.setAttribute("stroke", "black");
    hourHand.setAttribute("stroke-linecap", "round");
    hourHand.setAttribute("stroke-width", this.size / 40);
    hourHand.setAttribute("y2", this.size / 2 - mainCircle.getAttribute("cy") * 0.6);
    hourHand.id = "hHand" + this.xId;
    this.svg.append(hourHand);
    var minuteHand = document.createElementNS(this.ns, "line");
    minuteHand.setAttribute("stroke", "black");
    minuteHand.setAttribute("stroke-linecap", "round");
    minuteHand.setAttribute("stroke-width", this.size / 70);
    minuteHand.setAttribute("y2", this.size / 2 - mainCircle.getAttribute("cy") * 0.8);
    minuteHand.id = "mHand" + this.xId;
    this.svg.append(minuteHand);

    var secondHand = document.createElementNS(this.ns, "line");
    secondHand.setAttribute("stroke", "red");
    secondHand.setAttribute("stroke-linecap", "round");
    secondHand.setAttribute("stroke-width", this.size / 120);
    secondHand.setAttribute("y2", this.size / 2 - mainCircle.getAttribute("cy") * 0.9);
    secondHand.id = "sHand" + this.xId;
    this.svg.append(secondHand);
  }

  clockHandCenter(clock, hand) {
    var clockCenterX = parseFloat(clock.getAttribute("cx"));
    var clockCenterY = parseFloat(clock.getAttribute("cy"));
    var x2 = hand.setAttribute("x1", clockCenterX);
    var y2 = hand.setAttribute("y1", clockCenterY / 0.9);
    var x1 = hand.setAttribute("x2", clockCenterX - hand.getAttribute("stroke-width") / 2);
  }
  moveHourHand(currentHour, currentMinute) {
    var hourHand = document.getElementById("hHand" + this.xId);
    var hourAngle = currentHour * 30;
    hourAngle += currentMinute * 0.5;
    this.clockHandCenter(this.mainCircle, hourHand);
    var x = parseFloat(hourHand.getAttribute("x1"));
    var y = hourHand.getAttribute("y1") * 0.9;
    hourHand.setAttribute("transform", "rotate(" + hourAngle + " " + x + " " + y + ")");
  }

  moveMinuteHand(currentMinute, currentSecond) {
    var minuteHand = document.getElementById("mHand" + this.xId);
    var minuteAngle = currentMinute * 6;
    minuteAngle += currentSecond * 0.05;
    this.clockHandCenter(this.mainCircle, minuteHand);
    var x = parseFloat(minuteHand.getAttribute("x1"));
    var y = minuteHand.getAttribute("y1") * 0.9;
    minuteHand.setAttribute("transform", "rotate(" + minuteAngle + " " + x + " " + y + ")");

  }

  moveSecondHand(currentSecond) {
    var secondHand = document.getElementById("sHand" + this.xId);
    var secondAngle = currentSecond * 6;
    this.clockHandCenter(this.mainCircle, secondHand);
    var x = secondHand.getAttribute("x1");
    var y = secondHand.getAttribute("y1") * 0.9;
    secondHand.setAttribute("transform", "rotate(" + secondAngle + " " + x + " " + y + ")");
  }
}
