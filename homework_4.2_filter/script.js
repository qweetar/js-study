var inputText = prompt("Введите текст на русском языке");

function vowelCounter(text) {
var vowels = ["а", "о", "у", "ю", "е", "ё", "и", "ы", "я", "э", "А", "О", "У", "Ю", "Е", "Ё", "И", "Ы", "Я", "Э"];

 var chars = text.split("");

var vowelsArr = chars.filter(function(letter) {
  if (vowels.includes(letter)) {
    return true;
  }
});

 return vowelsArr.length;
}

alert("Количество гласных = " + vowelCounter(inputText));
