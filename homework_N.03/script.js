var userName = null;
while (userName == "" || userName == null) {
  userName = prompt("Введите Ваше имя");
}

var userSurname = null;
while (userSurname == "" || userSurname == null) {
  userSurname = prompt("Введите Ваше отчество");
}

var userFamilyname = null;
while (userFamilyname == "" || userFamilyname == null) {
  userFamilyname = prompt("Введите Вашу фамилию");
}

var userAge = null;
do {
    userAge = parseInt(prompt("Сколько Вам лет?"));
}
while (isNaN(userAge));

var userAgeInDays = userAge * 365;
var userAgeInFive = userAge + 5;

var flag = confirm("Вы мужского пола?");

var maleSex = "мужской";
var femaleSex = "женский";


var userSex = null;
if (flag == true) {
  userSex = maleSex;
} else {
  userSex = femaleSex;
}

var userRitired = null;
if (userSex == maleSex && userAge > 62) {
  userRitired = "да"
} else if (userSex == femaleSex && userAge > 57) {
  userRitired = "да"
} else {
  userRitired = "нет"
}

alert ("Ваше ФИО: " + userName + " "+ userSurname + " " + userFamilyname +
  "\nВаш возраст в годах: " + userAge +
  "\nВаш возраст в днях: " + userAgeInDays +
  "\nчерез 5 лет Вам будет: " + userAgeInFive +
  "\nВаш пол: " + userSex +
  "\nВы на пенсии: " + userRitired)
