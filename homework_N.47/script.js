"user strict"


var windowWidth = 800;
var windowHeight = 600;
var racketSpeed = 10;
var ballSpeedX = 4;
var ballSpeedY = 2;
var scoreLeft = 0;
var scoreRight = 0;
var leftRacketSpeedY = 0;
var leftRacketY = windowHeight / 3;
var rightRacketSpeedY = 0;
var rightRacketY = windowHeight / 3;

var ns = "http://www.w3.org/2000/svg";
var svg = document.createElementNS(ns, "svg");
document.body.append(svg);
svg.setAttributeNS(null, "width", windowWidth);
svg.setAttributeNS(null, "height", windowHeight);

// var game = createTenisGame();
createStartButton();
createScoreBoard();
createTennisField();
createTennisBall();
createLeftRacket();
createRightRacket();

var RAF=
        // находим, какой requestAnimationFrame доступен
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        // ни один не доступен - будем работать просто по таймеру
        function(callback)
            { window.setTimeout(callback, 1000 / 60); }
        ;

function start() {
  var tennisBall;
  if (document.getElementById("ball")) {
    tennisBall = document.getElementById("ball");
    tennisBall.remove();
    tennisBall = createTennisBall();
  } else {
    tennisBall = createTennisBall();
  }
  RAF(proxyRAF);
}

function proxyRAF() {
  ballMovement();
  moveLeftRacket();
  moveRightRacket();
}

document.addEventListener("keyup", function (event) {
  if (event.key == "Shift") {
    leftRacketSpeedY = 0;
  }
  if (event.key == "Control") {
    leftRacketSpeedY = 0;
  }
  if (event.key == "ArrowUp") {
    rightRacketSpeedY = 0;
  }
  if (event.key == "ArrowDown") {
    rightRacketSpeedY = 0;
  }
});
document.addEventListener("keydown", function (event) {
  var racket = document.getElementById("leftRacket");
  if (event.key == "Shift") {
    leftRacketSpeedY = -racketSpeed;
  }

  if (event.key == "Control") {
    leftRacketSpeedY = racketSpeed;
  }
  if (event.key == "ArrowUp") {
    rightRacketSpeedY = -racketSpeed;
  }
  if (event.key == "ArrowDown") {
    rightRacketSpeedY = racketSpeed;
  }
});

function moveLeftRacket() {
  var field = document.getElementById("tField");
  var racket = document.getElementById("leftRacket");
  leftRacketY += leftRacketSpeedY;
  racket.setAttribute("y", leftRacketY);
  if (leftRacketY < field.getAttribute("y")) {
    racket.setAttribute("y", field.getAttribute("y"));
  } else if (leftRacketY > windowHeight - racket.getAttribute("height")) {
    racket.setAttribute("y", windowHeight- racket.getAttribute("height"));
  }
}

function moveRightRacket() {
  var field = document.getElementById("tField");
  var racket = document.getElementById("rightRacket");
  rightRacketY += rightRacketSpeedY;
  racket.setAttribute("y", rightRacketY);
  if (rightRacketY < field.getAttribute("y")) {
    racket.setAttribute("y", field.getAttribute("y"));
  } else if (rightRacketY > windowHeight - racket.getAttribute("height")) {
    racket.setAttribute("y", windowHeight - racket.getAttribute("height"));
  }
}


function ballMovement() {
  var ball = document.getElementById("ball");
  var field = document.getElementById("tField");
  var leftRacket = document.getElementById("leftRacket");
  var rightRacket = document.getElementById("rightRacket");
  var ballPosX = parseFloat(ball.getAttribute("cx"));
  var ballPosY = parseFloat(ball.getAttribute("cy"));

  var ballLeft = ballPosX - parseFloat(ball.getAttribute("r"));
  var ballRight = ballPosX + parseFloat(ball.getAttribute("r"));;
  var ballTop = ballPosY - parseFloat(ball.getAttribute("r"));;
  var ballBottom = ballPosY + parseFloat(ball.getAttribute("r"));;;
  var fieldLeft = 0;
  var fieldRight = parseFloat(field.getAttribute("width"));
  var fieldTop = parseFloat(field.getAttribute("y"));
  var fieldBottom = parseFloat(field.getAttribute("y")) + parseFloat(field.getAttribute("height"));
  var rightRacketLeft = fieldRight - parseFloat(rightRacket.getAttribute("width"));
  var rightRacketTop = parseFloat(rightRacket.getAttribute("y"));
  var rightRacketBottom = parseFloat(rightRacket.getAttribute("height")) + parseFloat(rightRacket.getAttribute("y"));
  var leftRacketRight = fieldLeft + parseFloat(rightRacket.getAttribute("width"));
  var leftRacketTop = parseFloat(leftRacket.getAttribute("y"));;
  var leftRacketBottom = parseFloat(leftRacket.getAttribute("height")) + parseFloat(leftRacket.getAttribute("y"));

  ballPosX += ballSpeedX;

  if (ballRight > rightRacketLeft &
      ballBottom > rightRacketTop &
      ballTop < rightRacketBottom) {
    ballSpeedX = - ballSpeedX;
    ballPosX = rightRacketLeft - parseFloat(ball.getAttribute("r"));
  }
  if (ballRight > fieldRight) {
    ballPosX = parseFloat(field.getAttribute("width")) - parseFloat(ball.getAttribute("r"));
    ballSpeedX = - ballSpeedX;
    scoreLeft += 1;
    return changeScoreBoard(scoreLeft, scoreRight);
  }

  if (ballLeft < leftRacketRight &
      ballBottom > leftRacketTop &
      ballTop < leftRacketBottom) {
    ballSpeedX = - ballSpeedX;
    ballPosX = leftRacketRight + parseFloat(ball.getAttribute("r"));
  }
  if (ballLeft < fieldLeft) {
    ballSpeedX = - ballSpeedX;
    ballPosX = fieldLeft + parseFloat(ball.getAttribute("r"));
    scoreRight += 1;
    return changeScoreBoard(scoreLeft, scoreRight);
  }
  ballPosY += ballSpeedY;
  if (ballBottom  > fieldBottom) {
    ballSpeedY = - ballSpeedY;
    ballPosY = fieldBottom - parseFloat(ball.getAttribute("r"));
  }
  if (ballTop < fieldTop) {
    ballSpeedY = - ballSpeedY;
    ballPosY = fieldTop + parseFloat(ball.getAttribute("r"));
  }
  updateBallPos(ballPosX, ballPosY);
  return RAF(proxyRAF);
}

function updateBallPos(ballPosX, ballPosY) {
  var ball = document.getElementById("ball");
  ball.setAttribute("cy", ballPosY);
  ball.setAttribute("cx", ballPosX);
}

function createScoreBoard() {
  var scoreBoard = document.createElementNS(ns, "text");
  scoreBoard.style.fill = "black";
  scoreBoard.setAttribute("font-size", windowHeight * 0.08);
  scoreBoard.setAttribute("x", windowWidth / 2.2);
  scoreBoard.setAttribute("y", windowHeight / 14);
  scoreBoard.innerHTML = "0:0";
  scoreBoard.id = "score";
  svg.append(scoreBoard);
};

function changeScoreBoard(scoreLeft, scoreRight) {
  var score = document.getElementById("score");
  score.innerHTML = scoreLeft + ":" + scoreRight;
};

function createStartButton() {
  var fobj = document.createElementNS(ns, "foreignObject");
  fobj.setAttribute("height", windowHeight * 0.05);
  fobj.setAttribute("width", windowWidth * 0.1);
  svg.append(fobj);
  var startButton = document.createElement("button");
  fobj.append(startButton);
  startButton.style.height = windowHeight * 0.05 + "px";
  startButton.style.width = windowWidth * 0.1 + "px";
  startButton.style.left = "20px";
  startButton.innerHTML = "start!";
  startButton.setAttribute("onClick", "javascript: start();");
};

function createTennisField() {
  var tennisField = document.createElementNS(ns, "rect");
  svg.append(tennisField);
  tennisField.id = "tField";
  tennisField.setAttribute("width", windowWidth);
  tennisField.setAttribute("height", windowHeight * 0.86);
  tennisField.setAttribute("y", windowHeight * 0.14);
  tennisField.setAttribute("stroke", "red");
  tennisField.setAttribute("fill", "yellow");
};

function createLeftRacket() {
  var racket = document.createElementNS(ns, "rect");
  var tennisField = document.getElementById("tField");
  svg.append(racket);
  racket.id = "leftRacket";
  racket.setAttribute("fill", "green");
  racket.setAttribute("width", windowWidth * 0.02);
  racket.setAttribute("height", windowHeight * 0.2);
  racket.setAttribute("y", leftRacketY);
}

function createRightRacket() {
  var racket = document.createElementNS(ns, "rect");
  var tennisField = document.getElementById("tField");
  svg.append(racket);
  racket.id = "rightRacket";
  racket.setAttribute("fill", "blue");
  racket.setAttribute("width", windowWidth * 0.02);
  racket.setAttribute("height", windowHeight * 0.2);
  racket.setAttribute("y", rightRacketY);
  racket.setAttribute("x", parseFloat(tennisField.getAttribute("width")) - parseFloat(racket.getAttribute("width")));
}

function createTennisBall() {
  var tennisBall = document.createElementNS(ns, "circle");
  var tennisField = document.getElementById("tField");
  svg.append(tennisBall);
  tennisBall.id = "ball";
  tennisBall.setAttribute("fill", "red");
  tennisBall.setAttribute("r", windowWidth * 0.025);
  tennisBall.setAttribute("cx", windowWidth / 2);
  tennisBall.setAttribute("cy", windowHeight - parseFloat(tennisField.getAttribute("height")) / 2);
  return tennisBall;
}
