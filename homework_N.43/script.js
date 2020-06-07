"user strict"

var windowWidth = 800;
var windowHeight = 600;
var racketSpeed = 15;
var ballSpeedX = 3;
var ballSpeedY = 2;
var scoreLeft = 0;
var scoreRight = 0;

var game = createTenisGame();
createStartButton(game);
createScoreBoard(game);
createTennisField(game);
createTennisBall(game);
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
    tennisBall = createTennisBall(game);
  } else {
    tennisBall = createTennisBall(game);
  }
  RAF(ballMovement);
}


document.addEventListener("keydown", function (event) {
  var racket = document.getElementById("leftRacket");
  if (event.key == "Shift") {
  moveRacketUp(racket);
  }
});

document.addEventListener("keydown", function (event) {
  var racket = document.getElementById("leftRacket");
  if (event.key == "Control") {
  moveRacketDown(racket);
  }
});

document.addEventListener("keydown", function (event) {
  var racket = document.getElementById("rightRacket");
  if (event.key == "ArrowUp") {
    moveRacketUp(racket);
  }
});

document.addEventListener("keydown", function (event) {
  var racket = document.getElementById("rightRacket");
  if (event.key == "ArrowDown") {
  moveRacketDown(racket);
  }
});

function createTenisGame() {
  var gameWindow = document.createElement("div");
  document.body.append(gameWindow);
  gameWindow.id = "game";
  gameWindow.style.width = windowWidth + "px";
  gameWindow.style.height = windowHeight + "px";
  // gameWindow.style.border = "solid 2px brown";
  return gameWindow;
}

function ballMovement() {
  var ball = document.getElementById("ball");
  var field = document.getElementById("tField");
  var leftRacket = document.getElementById("leftRacket");
  var rightRacket = document.getElementById("rightRacket");
  var ballPosX = parseFloat(ball.offsetLeft);
  var ballPosY = parseFloat(ball.offsetTop);
  ballPosX += ballSpeedX;
  if (ballPosX + ball.offsetWidth > field.offsetWidth - rightRacket.offsetWidth &
      ballPosY + ball.offsetHeight > rightRacket.offsetTop &
      ballPosY < rightRacket.offsetTop + rightRacket.offsetHeight) {
    ballSpeedX = - ballSpeedX;
    ballPosX = field.offsetWidth - rightRacket.offsetWidth - ball.offsetWidthа;
  }
  if (ballPosX + ball.offsetWidth > field.offsetWidth) {
    ballSpeedX = - ballSpeedX;
    ballPosX = field.offsetWidth - ball.offsetWidth + field.offsetLeft;
    scoreLeft += 1;
    return changeScoreBoard(scoreLeft, scoreRight);
  }
  if (ballPosX < leftRacket.offsetWidth & ballPosY + ball.offsetHeight > leftRacket.offsetTop &
    ballPosY < leftRacket.offsetTop + leftRacket.offsetHeight) {
    ballSpeedX = - ballSpeedX;
    ballPosX = leftRacket.offsetWidth;
  }
  if (ballPosX < 0) {
    ballSpeedX = - ballSpeedX;
    ballPosX = 0;
    scoreRight += 1;
    return changeScoreBoard(scoreLeft, scoreRight);
  }
  ballPosY += ballSpeedY;
  if (ballPosY + ball.offsetHeight > field.offsetHeight) {
    console.log(ball.offsetHeight);
    console.log(field.offsetHeight)
    ballSpeedY = - ballSpeedY;
    ballPosY = field.offsetHeight - ball.offsetHeight;
  }
  if (ballPosY < 0) {
    ballSpeedY = - ballSpeedY;
    ballPosY = 0;
  }
  updateBallPos(ballPosX, ballPosY);
  return RAF(ballMovement);
}

function updateBallPos(ballPosX, ballPosY) {
  var ball = document.getElementById("ball");
  ball.style.top = ballPosY + "px";
  ball.style.left = ballPosX + "px";
}

function createTennisBall(game) {
  var tennisBall = document.createElement("div");
  var tennisField = document.getElementById("tField");
  tennisField.append(tennisBall);
  tennisBall.id = "ball";
  tennisBall.style.position = "absolute";
  tennisBall.style.backgroundColor = "red";
  tennisBall.style.borderRadius = "50%";
  tennisBall.style.width = windowWidth * 0.05 + "px";
  tennisBall.style.height = windowWidth * 0.05 + "px";

  var fieldCenterX = tennisField.offsetLeft + tennisField.offsetWidth/2;
  var fieldCenterY = tennisField.offsetHeight/2;

  var ballCenterX = fieldCenterX;
  var ballCenterY = fieldCenterY;

  tennisBall.style.left = ballCenterX - tennisBall.offsetWidth + "px";
  tennisBall.style.top = ballCenterY - tennisBall.offsetWidth + "px";
  return tennisBall;
}


function createStartButton(game) {
  var startButton = document.createElement("button");
  game.append(startButton);
  startButton.style.position = "absolute";
  startButton.style.height = windowHeight * 0.05 + "px";
  startButton.style.width = windowWidth * 0.1 + "px";
  startButton.innerHTML = "start!";
  startButton.setAttribute("onClick", "javascript: start();");
}

function createScoreBoard(game) {
  var scoreBoard = document.createElement("div");
  game.append(scoreBoard);
  scoreBoard.style.position = "absolute";
  scoreBoard.style.height = windowHeight * 0.1 + "px";
  var scoreBoardWidth = scoreBoard.style.width = windowWidth * 0.15 + "px";
  // scoreBoard.style.border = "solid 2px brown";
  scoreBoard.style.left = windowWidth / 2 - parseFloat(scoreBoardWidth) / 2 + "px";
  scoreBoard.style.textAlign = "center";
  var scoreNum = document.createElement("span");
  scoreBoard.append(scoreNum);
  scoreNum.style.position = "relative";
  scoreNum.id = "score";
  scoreNum.style.fontSize = windowHeight * 0.5 + "%";
  scoreNum.innerHTML = "0:0";
}

function changeScoreBoard(scoreLeft, scoreRight) {
  var score = document.getElementById("score");
  score.innerHTML = scoreLeft + ":" + scoreRight;
};

function createTennisField(game) {
  var tennisField = document.createElement("div");
  game.append(tennisField);
  tennisField.id = "tField";
  tennisField.style.position = "absolute";
  tennisField.style.width = windowWidth * 0.994 + "px";
  tennisField.style.height = windowHeight * 0.865 + "px";
  tennisField.style.top = windowHeight * 0.14 + "px";
  tennisField.style.border = "solid 2px red";
  tennisField.style.backgroundColor = "yellow";
}

function createLeftRacket() {
  var racket = document.createElement("div");
  var tennisField = document.getElementById("tField");
  tennisField.append(racket);
  racket.id = "leftRacket";
  racket.style.position = "absolute";
  racket.style.backgroundColor = "green";
  racket.style.width = windowWidth * 0.02 + "px";
  racket.style.height = windowHeight * 0.2 + "px";
  racket.style.top = tennisField.offsetTop / 2 + "px";
}

function createRightRacket() {
  var racket = document.createElement("div");
  var tennisField = document.getElementById("tField");
  tennisField.append(racket);
  racket.id = "rightRacket";
  racket.style.position = "absolute";
  racket.style.backgroundColor = "blue";
  racket.style.width = windowWidth * 0.02 + "px";
  racket.style.height = windowHeight * 0.2 + "px";
  racket.style.top = tennisField.offsetHeight / 2 + "px";
  racket.style.left = tennisField.offsetWidth - tennisField.offsetLeft / 2 - racket.offsetWidth + "px";
}

function moveRacketUp(racket) {
  var field = document.getElementById("tField");
  var movement = racket.offsetTop;
  if (movement > racketSpeed-1) {
    movement -= racketSpeed;
  } else {
    movement = 0;
  }
  racket.style.top = movement + "px";
}

function moveRacketDown(racket) {
  var field = document.getElementById("tField");
  var movement = racket.offsetTop;
  if (movement < field.offsetHeight - racket.offsetHeight - racketSpeed-1) {
    movement += racketSpeed;
  } else {
    movement = field.offsetHeight - racket.offsetHeight;
  }
  racket.style.top = movement + "px";
}
