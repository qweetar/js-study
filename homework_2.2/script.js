var inputText = prompt("Введите текст на русском языке");

function vowelCounter(text) {
const vowels = ["а", "о", "у", "ю", "е", "ё", "и", "ы", "я", "э", "А", "О", "У", "Ю", "Е", "Ё", "И", "Ы", "Я", "Э"];

 var chars = text.split("");

 var countVowels = 0;

 for (var i = 0; i < text.length; i++) {
     if (vowels.includes(text[i])) {
       countVowels++;
   }
 }
 return countVowels;
}

alert("Количество гласных = " + vowelCounter(inputText));
