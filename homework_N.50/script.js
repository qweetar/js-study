"user strict"

var ballHit = true;
var windowWidth = 800;
var windowHeight = 600;
var racketSpeed = 10;
var ballSpeedX = 4;
var ballSpeedY = 2;
var scoreLeft = 0;
var scoreRight = 0;
var tennisFieldLeft = 0;
var tennisFieldRight = windowWidth;
var tennisFieldTop = windowHeight * 0.14;
var tennisFieldBottom = windowHeight;
var tennisFieldWidth = windowWidth;
var tennisFieldHeight = windowHeight * 0.86
var racketWidth = windowWidth * 0.02;
var racketHeight = windowHeight * 0.2;
var leftRacketSpeedY = 0;
var leftRacketY = windowHeight / 3;
var leftRacketRight = tennisFieldLeft + racketWidth;
var leftRacketTop;
var leftRacketBottom;
var rightRacketSpeedY = 0;
var rightRacketY = windowHeight / 3;
var rightRacketLeft = tennisFieldRight - racketWidth;
var rightRacketTop;
var rightRacketBottom;
var ballRadius = windowWidth * 0.025;
var ballPosX = windowWidth / 2;
var ballPosY = windowHeight - tennisFieldHeight / 2;
var ballLeft;
var ballRight;
var ballTop;
var ballBottom;

var canvas = document.createElement("CANVAS");
document.body.append(canvas);
var ctx = canvas.getContext("2d");
canvas.width = windowWidth;
canvas.height = windowHeight;

createStartButton();
createScoreBoard(0,0);
createTennisBall(ballPosX, ballPosY);
createTennisField();
createTennisBall(ballPosX, ballPosY);
createLeftRacket(leftRacketY);
createRightRacket(rightRacketY);

var RAF=
        // находим, какой requestAnimationFrame доступен
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        // ни один не доступен - будем работать просто по таймеру
        function(callback)
            { window.setTimeout(callback, 1000 / 60); };

function start() {
  if (ballHit) {
    ballPosX = windowWidth / 2;
    ballPosY = windowHeight - tennisFieldHeight / 2;
    createTennisField();
    createTennisBall(ballPosX, ballPosY);
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

function createTennisField() {
  var tennisField = ctx;
  tennisField.fillStyle = "yellow";
  tennisField.strokeStyle = "red";
  tennisField.lineWidth = "2";
  tennisField.beginPath();
  tennisField.rect(1, tennisFieldTop, tennisFieldWidth - 1, tennisFieldBottom - tennisFieldTop - 1);
  tennisField.fill();
  tennisField.stroke();
}

function createScoreBoard(scoreLeft, scoreRight) {
  var score = scoreLeft + ":" + scoreRight;
  var scoreBoard = ctx;
  scoreBoard.fillStyle = "white";
  scoreBoard.fillRect(windowWidth / 2.3 , windowHeight * 0.01, windowWidth * 0.12, windowHeight * 0.08);
  scoreBoard.save();
  scoreBoard.font = windowHeight * 0.08 + "px times";
  scoreBoard.textBaseline = "middle";
  scoreBoard.textAlign = "center";
  scoreBoard.fillStyle = "black";
  scoreBoard.fillText(score, windowWidth / 2, windowHeight * 0.05);
}

function changeScoreBoard(scoreLeft, scoreRight) {
  createScoreBoard(scoreLeft, scoreRight);
};

function createStartButton() {
  var rect = canvas.getBoundingClientRect();
  var startButton = document.createElement("button");
  document.body.append(startButton);
  startButton.style.position = "absolute";
  startButton.style.height = windowHeight * 0.05 + "px";
  startButton.style.width = windowWidth * 0.1 + "px";
  startButton.style.left = rect.left + "px";
  startButton.style.top = rect.top + "px";
  startButton.innerHTML = "start!";
  startButton.setAttribute("onClick", "javascript: start();");
}

function createLeftRacket(leftRacketY) {
  leftRacketTop = leftRacketY;
  leftRacketBottom = leftRacketY + racketHeight;
  var racket = ctx;
  racket.fillStyle = "yellow";
  racket.fillRect(0, leftRacketY, racketWidth, racketHeight);
  racket.save();
  racket.beginPath();
  racket.fillStyle = "green";
  racket.fillRect(0, leftRacketY, racketWidth, racketHeight);
  racket.fill();
  racket.save();
}

function createRightRacket(rightRacketY) {
  rightRacketTop = rightRacketY;
  rightRacketBottom = rightRacketY + racketHeight;
  var racket = ctx;
  racket.fillStyle = "yellow";
  racket.fillRect(windowWidth - windowWidth * 0.02, rightRacketY, racketWidth, racketHeight);
  racket.save();
  racket.beginPath();
  racket.fillStyle = "blue";
  racket.fillRect(windowWidth - windowWidth * 0.02, rightRacketY, racketWidth, racketHeight);
  racket.fill();
  racket.save();
}

function moveLeftRacket() {
  leftRacketY += leftRacketSpeedY;
  if (leftRacketY < tennisFieldTop) {
    leftRacketY = tennisFieldTop;
    createLeftRacket(leftRacketY);
  } else if (leftRacketY > windowHeight - racketHeight) {
    leftRacketY = windowHeight - racketHeight;
    createLeftRacket(leftRacketY);
  }
  createLeftRacket(leftRacketY);
}

function moveRightRacket() {
  rightRacketY += rightRacketSpeedY;
  if (rightRacketY < tennisFieldTop) {
    rightRacketY = tennisFieldTop;
    createRightRacket(rightRacketY);
  } else if (rightRacketY > windowHeight - racketHeight) {
    rightRacketY = windowHeight - racketHeight;
    createRightRacket(rightRacketY);
  }
  createRightRacket(rightRacketY);
}

function createTennisBall(ballPosX, ballPosY) {
  ballHit = false;
  ballLeft = ballPosX - ballRadius;
  ballRight = ballPosX + ballRadius;
  ballTop = ballPosY - ballRadius;
  ballBottom = ballPosY + ballRadius;
  createTennisField();
  var tennisBall = ctx;
  tennisBall.beginPath();
  tennisBall.fillStyle = "red";
  tennisBall.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
  tennisBall.fill();
}

function ballMovement() {
  ballPosX += ballSpeedX;
  if (ballRight > rightRacketLeft &
      ballBottom > rightRacketTop &
      ballTop < rightRacketBottom) {
    ballSpeedX = - ballSpeedX;
    ballPosX = rightRacketLeft - ballRadius;
    console.log(11);
  }
  if (ballRight > tennisFieldRight) {
    ballPosX = tennisFieldWidth - ballRadius;
    ballSpeedX = - ballSpeedX;
    scoreLeft += 1;
    console.log(22);
    ballHit = true;
    return changeScoreBoard(scoreLeft, scoreRight);
  }
  if (ballLeft < leftRacketRight &
      ballBottom > leftRacketTop &
      ballTop < leftRacketBottom) {
    ballSpeedX = - ballSpeedX;
    ballPosX = leftRacketRight + ballRadius;
    console.log(33);
  }
  if (ballLeft < tennisFieldLeft) {
    ballSpeedX = - ballSpeedX;
    ballPosX = tennisFieldLeft + ballRadius;
    scoreRight += 1;
    console.log(44);
    ballHit = true;
    return changeScoreBoard(scoreLeft, scoreRight);
  }

  ballPosY += ballSpeedY;
  if (ballBottom  > tennisFieldBottom) {
    ballSpeedY = - ballSpeedY;
    ballPosY = tennisFieldBottom - ballRadius;
    console.log(55);
  }
  if (ballTop < tennisFieldTop) {
    ballSpeedY = - ballSpeedY;
    ballPosY = tennisFieldTop + ballRadius;
    console.log(66);
  }
  createTennisBall(ballPosX, ballPosY);
  return RAF(proxyRAF);
};
