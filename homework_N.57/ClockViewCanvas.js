"user strict"

class ClockViewCanvas {
  constructor(name, xId) {
    this.canvas = document.createElement("CANVAS");
    this.name = name;
    this.xId = xId;
    this.size = name.offsetWidth;
    this.name.append(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.radius = this.canvas.height / 2;
    this.ctx.translate(this.radius, this.radius);
    this.radius = this.radius * 0.99;
    this.mainCircle = this.createMainCircle();
  }

  createMainCircle() {
      var grad;
      var circle = this.ctx;
      circle.beginPath();
      circle.arc(0, 0, this.radius, 0, 2 * Math.PI);
      circle.fillStyle = "orange";
      circle.fill();
      circle.strokeStyle = "brown";
      circle.lineWidth = this.radius * 0.01;
      circle.stroke();

      return circle;
  }

  createNumCircles(ctx, radius) {
    var numCircle = this.ctx;
    var numCircleRadius = this.radius / 8;
    var ang;
    for (var i = 0; i < 13; i++) {
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

    var num = this.ctx;
    num.font = radius * 0.15 + "px times";
    num.textBaseline = "middle";
    num.textAlign = "center";
    for (var i = 1; i < 13; i++) {
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

  createDigitWatch(ctx, radius, time) {
    var digitWatchX = 0;
    var digitWatchY = 0 - radius * 0.4;
    var digitWatch = this.ctx;
    digitWatch.fillStyle = "orange";
    digitWatch.fillRect(digitWatchX - radius * 0.3, digitWatchY * 1.2, radius * 0.6, radius * 0.15);
    digitWatch.save();
    digitWatch.font = radius * 0.15 + "px times";
    digitWatch.textBaseline = "middle";
    digitWatch.textAlign = "center";
    digitWatch.fillStyle = "black";
    digitWatch.fillText(time, digitWatchX, digitWatchY);
  }

  createClockHands(ctx, pos, length, width) {
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

  updateTime(gmt) {
    var radiusCounter = 0;
    this.mainCircle = this.createMainCircle(this.ctx);
    this.createNumCircles(this.ctx, this.radius);
    var currTime = new Date();
    var hours = currTime.getHours() + gmt;
    var time = str0l(hours, 2) + ":" + str0l(currTime.getMinutes(), 2) + ":" + str0l(currTime.getSeconds(), 2);
    this.createDigitWatch(this.ctx, this.radius, time);
    this.moveHourHand(hours, currTime.getMinutes());
    this.moveMinuteHand(currTime.getMinutes(), currTime.getSeconds());
    this.moveSecondHand(currTime.getSeconds());

    function str0l(val,len) {
            var strVal=val.toString();
            while ( strVal.length < len )
                strVal='0'+strVal;
            return strVal;
    }
  }

  moveHourHand(currentHour, currentMinute) {
    var hourHand = currentHour % 12;
    hourHand = (hourHand * Math.PI / 6) + (currentMinute * Math.PI / (6 * 60));
    var hourHandLength = this.radius * 0.6;
    var hourHandWidth = this.radius * 0.07;
    this.ctx.strokeStyle = "black";
    this.createClockHands(this.ctx, hourHand, hourHandLength, hourHandWidth);
  }

  moveMinuteHand(currentMinute, currentSecond) {
    var minuteHand = (currentMinute * Math.PI / 30) + (currentSecond * Math.PI / (30 * 60));
    var minuteHandLength = this.radius * 0.7;
    var minuteHandWidth = this.radius * 0.05;
    this.ctx.strokeStyle = "black";
    this.createClockHands(this.ctx, minuteHand, minuteHandLength, minuteHandWidth);
  }

  moveSecondHand(currentSecond) {
    var secondHand = (currentSecond * Math.PI / 30);
    var secondHandLength = this.radius * 0.9;
    var secondHandWidth = this.radius * 0.02;
    this.ctx.strokeStyle = "red";
    this.createClockHands(this.ctx, secondHand, secondHandLength, secondHandWidth);
  }

}
