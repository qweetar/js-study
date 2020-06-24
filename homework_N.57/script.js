// main script

"user strict"

var gmtR1C1 = -5;
var clockR1C1id = "r1-c1";
var divR1C1 = document.getElementById(clockR1C1id);
var clockViewDOMR1C1 = new ClockViewDOM(divR1C1, clockR1C1id);
var clockR1C1 = new Clock(clockR1C1id, clockViewDOMR1C1, gmtR1C1);
var controllerR1C1 = new ClockControllerButtons(clockR1C1id, clockR1C1);

var gmtR2C1 = 2;
var clockR2C1id = "r2-c1";
var clockR2C1 = document.getElementById(clockR2C1id);
var clockViewDOMR2C1 = new ClockViewDOM(clockR2C1, clockR2C1id);
var clockR2C1 = new Clock(clockR2C1id, clockViewDOMR2C1, gmtR2C1);
var controllerR2C1 = new ClockControllerButtons(clockR2C1id, clockR2C1);

var gmtR1C2 = 0;
var clockR1C2id = "r1-c2";
var divR1C2 = document.getElementById(clockR1C2id);
var clockViewDOMR1C2 = new ClockViewSVG(divR1C2, clockR1C2id);
var clockR1C2 = new Clock(clockR1C2id, clockViewDOMR1C2, gmtR1C2);
var controllerR1C2 = new ClockControllerButtons(clockR1C2id, clockR1C2);

var gmtR2C2 = 8;
var clockR2C2id = "r2-c2";
var clockR2C2 = document.getElementById(clockR2C2id);
var clockViewDOMR2C2 = new ClockViewSVG(clockR2C2, clockR2C2id);
var clockR2C2 = new Clock(clockR2C2id, clockViewDOMR2C2, gmtR2C2);
var controllerR2C2 = new ClockControllerButtons(clockR2C2id, clockR2C2);

var gmtR1C3 = 1;
var clockR1C3id = "r1-c3";
var divR1C3 = document.getElementById(clockR1C3id);
var clockViewDOMR1C3 = new ClockViewCanvas(divR1C3, clockR1C3id);
var clockR1C3 = new Clock(clockR1C3id, clockViewDOMR1C3, gmtR1C3);
var controllerR1C3 = new ClockControllerButtons(clockR1C3id, clockR1C3);

var gmtR2C3 = 9;
var clockR2C3id = "r2-c3";
var clockR2C3 = document.getElementById(clockR2C3id);
var clockViewDOMR2C3 = new ClockViewCanvas(clockR2C3, clockR2C3id);
var clockR2C3 = new Clock(clockR2C3id, clockViewDOMR2C3, gmtR2C3);
var controllerR2C3 = new ClockControllerButtons(clockR2C3id, clockR2C3);
