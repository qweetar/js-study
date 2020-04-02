const vowels = ["а", "о", "у", "ю", "е", "ё", "и", "ы", "я", "э", "А", "О", "У", "Ю", "Е", "Ё", "И", "Ы", "Я", "Э"];

 var text = prompt("Введите текст на русском языке");

 var countVowels = 0;

 var chars = text.split("");

 for (var i = 0; i < chars.length; i++) {
   for (var j = 0; j < vowels.length; j++) {
     if (chars[i] == vowels[j]) {
       countVowels++;
     }
   }
 }

 alert("Количество гласных = " + countVowels);
