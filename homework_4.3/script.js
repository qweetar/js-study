
var inputText = prompt("Введите текст на русском языке");

palindromCheck(inputText);

function palindromCheck(str) {

  var newOne = str;
  console.log("Start string: " + newOne);

  newOne = newOne.toLowerCase();
  console.log("To Lower Case: " + newOne);

  newOne = newOne.replace("ё", "е");
  newOne = newOne.replace("ъ", "ь");
  newOne = newOne.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()\s+]/g,"");
  console.log("After replacement: " + newOne);

  function revertStr(str) {
    var tempStr = "";
    for (i = str.length - 1; i >= 0; i--) {
      tempStr += str.charAt(i);
    }
    return tempStr;
  }

  var revNewOne = revertStr(newOne);
  console.log("Reversed string: " + revNewOne);

  if (newOne === revNewOne ) {
    alert("Введенная фраза является Палиндромом");
  } else {
    alert("Введенная фраза не является Палиндромом");
  }
};
