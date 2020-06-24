// controller
"user strict"

class ClockControllerButtons {
  constructor(divId, model) {
    this.divId = divId
    this.myModel = model;
    this.run();
  }

  run() {
    var myDiv = document.getElementById(this.divId);
    var r1c1Start = myDiv.querySelector(".start");
    r1c1Start.addEventListener("click", this.start);
    var r1c1Stop = myDiv.querySelector(".stop");
    r1c1Stop.addEventListener("click", this.stop);
  }

  funcStart() {
    this.myModel.runClock(true);
  }
  start = this.funcStart.bind(this);

  funcStop() {
    this.myModel.runClock(false);
  }
  stop = this.funcStop.bind(this);
}
