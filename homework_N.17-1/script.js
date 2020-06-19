
var inputText = prompt("Введите текст на русском языке");

if (palindromCheck(inputText)) {
  alert("Введенная фраза является Палиндромом");
} else {
  alert("Введенная фраза не является Палиндромом");
};

function palindromCheck(str) {

  var newOne = str;
  console.log("Start string: " + newOne);

  newOne = newOne.toLowerCase();
  console.log("To Lower Case: " + newOne);

  newOne = newOne.replace("ё", "е");
  newOne = newOne.replace(/[.,\/#!?$%\^&\*;:ъь{}=\-_`~()\s+]/g,"");
  console.log("After replacement: " + newOne);

  var countStart = 0;
  var countEnd = newOne.length - 1;

  while (countStart < countEnd) {
    if (newOne[countStart] === newOne[countEnd]) {
      console.log(newOne[countStart] + " - " + newOne[countEnd]);
      countStart++;
      countEnd--;
    } else {
      console.log(newOne[countStart] + " - " + newOne[countEnd]);
      return false;
    }
  }
  return true;

};
