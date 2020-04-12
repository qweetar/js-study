"use strict"

var inputText = prompt("Введите текст на русском языке");
console.log("|" + inputText + "|"); // проверка на то что изначально пробелы есть

function cutSpace(text) {

  var startChar = 0;
  var endChar = text.length;

  if (text.length == 0) {
    console.log("Строка пустая");
    return text;
  }

  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      startChar = 1 + i;
    } else {
      break;
    }
  }

  if (startChar == text.length && startChar > 0) {
    console.log("Строка состоит только из пробелов");
    return text;
  }

  for (var j = text.length - 1; j >= 0; j--) {
    if (text[j] == " ") {
      endChar = j;
    } else {
      break;
    }
  }

  if (startChar == 0 && endChar == text.length) {
    console.log("В начале и конце строки нет пробелов");
    return text;
  }

  var cleanText = text.slice(startChar, endChar);
  console.log("В строке вырезаны пробелы");
  return cleanText;
}

alert("|" + cutSpace(inputText) + "|");
