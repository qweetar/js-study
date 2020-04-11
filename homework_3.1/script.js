"use strict"

var inputText = prompt("Введите текст на русском языке");
console.log("|" + inputText + "|"); // проверка на то что изначально пробелы есть

function cutSpace(text) {

  var startChar = 0;
  var endChar = text.length;

  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      startChar = 1 + i;
    } else {
      break;
    }
  }

  for (var j = text.length - 1; j >= 0; j--) {
    if (text[j] == " ") {
      endChar = j;
    } else {
      break;
    }
  }

  var cleanText = text.slice(startChar, endChar);

  return cleanText;
}

alert("|" + cutSpace(inputText) + "|");
