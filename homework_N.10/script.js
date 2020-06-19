"use strict"

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  var colors = ["", "красный", "оранжевый", "жёлтый", "зелёный", "глубой", "синий", "фиолетовый"];

  console.log("цветов " + colorsCount);

  var checkRainbow = { };
  
  for (var i = 1; i <= colorsCount; i++) {
    var n = randomDiap(1, 7);
    if (colors[n] in checkRainbow) {
      i--;
    } else {
    console.log(checkRainbow[colors[n]] = colors[n]);
    }
  }
}

mood(3);
