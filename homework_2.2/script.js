function vowelCounter() {
const vowels = ["а", "о", "у", "ю", "е", "ё", "и", "ы", "я", "э", "А", "О", "У", "Ю", "Е", "Ё", "И", "Ы", "Я", "Э"];

 var text = prompt("Введите текст на русском языке");
 var chars = text.split("");

 var countVowels = 0;

 for (var i = 0; i < text.length; i++) {
     if (vowels.includes(text[i])) {
       countVowels++;
   }
 }

 alert("Количество гласных = " + countVowels);
}

vowelCounter();
