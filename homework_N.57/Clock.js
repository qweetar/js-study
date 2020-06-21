// DOM clock
var gmtR1C1 = -7;
var clockR1C1id = "r1-c1";
var clockR1C1 = document.getElementById(clockR1C1id);
var clockViewDOMR1C1 = new ClockViewDOM(clockR1C1, clockR1C1id);
clockViewDOMR1C1.updateTime(gmtR1C1);
let r1c1TimerId;
runClockR1C1(true);
function runClockR1C1(flag) {
  let clockRunR1C1 = flag;
  if (clockRunR1C1) {
    r1c1TimerId = setInterval(upTimeR1C1, 1000);
  } else {
      clearInterval(r1c1TimerId);
  }
}

function upTimeR1C1() {
  clockViewDOMR1C1.xId = clockR1C1id;
  clockViewDOMR1C1.updateTime(gmtR1C1);
}

var gmtR2C1 = 0;
var clockR2C1id = "r2-c1";
var clockR2C1 = document.getElementById(clockR2C1id);
var clockViewDOMR2C1 = new ClockViewDOM(clockR2C1, clockR2C1id);
clockViewDOMR2C1.updateTime(gmtR2C1);
let r2c1TimerId;
runClockR2C1(true);
function runClockR2C1(flag) {
  let clockRunR2C1 = flag;
  if (clockRunR2C1) {
    r2c1TimerId = setInterval(upTimeR2C1, 1000);
  } else {
      clearInterval(r2c1TimerId);
  }
}

function upTimeR2C1() {
  clockViewDOMR2C1.xId = clockR2C1id;
  clockViewDOMR2C1.updateTime(gmtR2C1);
}

// SVG clock
var gmtR1C2 = -2;
var clockR1C2id = "r1-c2";
var clockR1C2 = document.getElementById(clockR1C2id);
var clockViewSVGR1C2 = new ClockViewSVG(clockR1C2, clockR1C2id);
clockViewSVGR1C2.updateTime(gmtR1C2);
let r1c2TimerId;
runClockR1C2(true);
function runClockR1C2(flag) {
  let clockRunR1C2 = flag;
  if (clockRunR1C2) {
    r1c2TimerId = setInterval(upTimeR1C2, 1000);
  } else {
      clearInterval(r1c2TimerId);
  }
}

function upTimeR1C2() {
  clockViewSVGR1C2.xId = clockR1C2id;
  clockViewSVGR1C2.updateTime(gmtR1C2);
}

var gmtR2C2 = 6;
var clockR2C2id = "r2-c2";
var clockR2C2 = document.getElementById(clockR2C2id);
var clockViewSVGR2C2 = new ClockViewSVG(clockR2C2, clockR2C2id);
clockViewSVGR2C2.updateTime(gmtR2C2);
let r2c2TimerId;
runClockR2C2(true);
function runClockR2C2(flag) {
  let clockRunR2C2 = flag;
  if (clockRunR2C2) {
    r2c2TimerId = setInterval(upTimeR2C2, 1000);
  } else {
      clearInterval(r2c2TimerId);
  }
}

function upTimeR2C2() {
  clockViewSVGR2C2.xId = clockR2C2id;
  clockViewSVGR2C2.updateTime(gmtR2C2);
}

// CANVAS clock
var gmtR1C3 = -1;
var clockR1C3id = "r1-c3";
var clockR1C3 = document.getElementById(clockR1C3id);
var clockViewCanvasR1C3 = new ClockViewCanvas(clockR1C3, clockR1C3id);
clockViewCanvasR1C3.updateTime(gmtR1C3);
let r1c3TimerId;
runClockR1C3(true);
function runClockR1C3(flag) {
  let clockRunR1C3 = flag;
  if (clockRunR1C3) {
    r1c3TimerId = setInterval(upTimeR1C3, 1000);
  } else {
      clearInterval(r1c3TimerId);
  }
}

function upTimeR1C3() {
  clockViewCanvasR1C3.xId = clockR1C3id;
  clockViewCanvasR1C3.updateTime(gmtR1C3);
}

var gmtR2C3 = 7;
var clockR2C3id = "r2-c3";
var clockR2C3 = document.getElementById(clockR2C3id);
var clockViewCanvasR2C3 = new ClockViewCanvas(clockR2C3, clockR2C3id);
clockViewCanvasR2C3.updateTime(gmtR2C3);
let r2c3TimerId;
runClockR2C3(true);
function runClockR2C3(flag) {
  let clockRunR2C3 = flag;
  if (clockRunR2C3) {
    r2c3TimerId = setInterval(upTimeR2C3, 1000);
  } else {
      clearInterval(r2c3TimerId);
  }
}

function upTimeR2C3() {
  clockViewCanvasR2C3.xId = clockR2C3id;
  clockViewCanvasR2C3.updateTime(gmtR2C3);
}
