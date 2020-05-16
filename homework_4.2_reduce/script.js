var inputText = prompt("Введите текст на русском языке");

function vowelCounter(text) {
var vowels = ["а", "о", "у", "ю", "е", "ё", "и", "ы", "я", "э", "А", "О", "У", "Ю", "Е", "Ё", "И", "Ы", "Я", "Э"];

 var chars = text.split("");

 var sum = chars.reduce(function(accumulator, letter) {
   if(vowels.includes(letter)) {
     accumulator++;
   }
   return accumulator;
 }, 0);

 return sum;
}

alert("Количество гласных = " + vowelCounter(inputText));
