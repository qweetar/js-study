// model
class Clock {
  constructor(elementId, view, gmt) {
    this.elementId = elementId;
    this.gmt = gmt;
    this.clockView = view;
    this.runClock(this.runFlag);
  }

  runFlag = true;
  timerId;

  funcUpdateTime() {
    if (this.runFlag) {
      this.clockView.updateTime(this.setClockTime());
    }
    else {
      clearInterval(this.timerId);
    }
  }
  updateTime = this.funcUpdateTime.bind(this);

  runClock(flag) {
    this.runFlag = flag;
    this.timerId  = setInterval(this.updateTime, 1000);
  }

  setClockTime() {
    var currTime = new Date();
    var hours = currTime.getHours();
    if (hours - 2 < 0) { // London Time riset
      hours = hours - 2 + 24;
    } else {
      hours = hours - 2;
    }
    if (hours + this.gmt < 0) {
      hours = hours + this.gmt + 24;
    } else {
      hours = hours + this.gmt;
    }
    currTime.setHours(hours);
    return currTime;
  }
}
