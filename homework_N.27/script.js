"user strict"

// Проверка формы на заполнение перед отправкой
var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  if (!devCheck() | !siteCheck() | !urlCheck() | !dateCheck() | !userNumCheck() | !emailCheck() | !catalogCheck() | !radioCheck() | !checkCheck() | !descCheck()) {
    focusMove();
    event.preventDefault();
  }
}, false);

// Метод перемещение курсора на первое поле с ошибкой
function focusMove() {
  if (!devCheck()) {
    developer.focus();
  } else if (!siteCheck()) {
    webSite.focus();
  } else if (!urlCheck()) {
    webUrl.focus();
  } else if (!dateCheck()) {
    siteDate.focus();
  } else if (!userNumCheck()){
    usersNum.focus();
  } else if (!emailCheck()) {
    email.focus();
  } else if (!catalogCheck()) {
    catalog.focus();
  }  else if (!descCheck()) {
    desc.focus();
  }
}

// Валидация поля Разработчик
var developer = document.getElementById("dev");
var developerErr = document.getElementById("devError");

developer.onblur = devCheck;
developer.onfocus = devReset;

function devCheck() {
  if (developer.value == "") { // Проверка на пустое поле
    developer.classList.add("invalid");
    developerErr.innerHTML = "Поле не может быть пустое";
    return false;
  }
  return true;
}

function devReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    developerErr.innerHTML = "";
  }
}

// Валидация поля Название сайта
var webSite = document.getElementById("siteName");
var siteErr = document.getElementById("siteNameError");

webSite.onblur = siteCheck;
webSite.onfocus = siteReset;

function siteCheck() {
  if (webSite.value == "") { // Проверка на пустое поле
    webSite.classList.add("invalid");
    siteErr.innerHTML = "Поле не может быть пустое";
    return false;
  }
  return true;
}

function siteReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    siteErr.innerHTML = "";
  }
}

// Валидация поля URL сайта
var webUrl = document.getElementById("siteUrl");
var urlErr = document.getElementById("siteUrlError");

webUrl.onblur = urlCheck;
webUrl.onfocus = urlReset;

function urlCheck() {
  if (!webUrl.value.includes(".")) { // Проверка на наличие точки
    webUrl.classList.add("invalid");
    urlErr.innerHTML = "URL сайта должен содержать доменное имя 'пример: .com'";
    return false;
  }
  return true;
}

function urlReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    urlErr.innerHTML = "";
  }
}

// Валидация поля Дата запуска сайта
var siteDate = document.getElementById("startDate");
var dateErr = document.getElementById("startDateError");

siteDate.onblur = dateCheck;
siteDate.onfocus = dateReset;

function dateCheck() {
  if (siteDate.value == "") { // Проверка на пустое поле
    siteDate.classList.add("invalid");
    dateErr.innerHTML = "Необходимо выбрать дату запуска";
    return false;
  }
  return true;
}

function dateReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    dateErr.innerHTML = "";
  }
}

// Валидация поля Посетителей в сутки
var usersNum = document.getElementById("users");
var numErr = document.getElementById("usersError");

usersNum.onblur = userNumCheck;
usersNum.onfocus = userNumReset;

function userNumCheck() {
  if (usersNum.value == "") { // Проверка на пустое поле
    usersNum.classList.add("invalid");
    userNumReset.innerHTML = "Поле не может быть пустым";
    return false;
  }
  return true;
}

function userNumReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    userNumReset.innerHTML = "";
  }
}

// Валидация поля Email
var email = document.getElementById("mail");
var emailErr = document.getElementById("mailError");

email.onblur = emailCheck;
email.onfocus = emailReset;

function emailCheck() {
  if (!email.value.includes("@")) { // Проверка на наличие символа '@'
    email.classList.add("invalid");
    emailErr.innerHTML = "Email должен быть в формате 'some@some.com'";
    return false;
  }
  return true;
}

function emailReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    emailErr.innerHTML = "";
  }
}

// Валидация поля Рубрика каталога
var catalog = document.getElementById("choise");
var catErr = document.getElementById("choiseError");

catalog.onblur = catalogCheck;
catalog.onfocus = catalogReset;

function catalogCheck() {
  if (catalog.value == "0") { // Проверка на выбор заполненного значения
    catalog.classList.add("invalid");
    catErr.innerHTML = "Выбор значения обязателен";
    return false;
  }
  return true;
}

function catalogReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    catErr.innerHTML = "";
  }
}

// Валидация поля Размещение
var radioBut = document.getElementsByClassName("radio");
var radioErr = document.getElementById("radioError");

radioBut[0].onchange = radioReset;
radioBut[1].onchange = radioReset;
radioBut[2].onchange = radioReset;

function radioCheck() {
  if (radioBut[0].checked == false && radioBut[1].checked == false && radioBut[2].checked == false) { // Проверка на наличие выбора поля
    radioErr.innerHTML = "Выберите тип размещения";
    return false;
  }
  return true;
}

function radioReset() {
  for (let but of radioBut) {
    if (but.checked == true) {
      but.checked = true;
      radioErr.innerHTML = "";
    }
  }

}

//Валидация поля разрешить отзывы
var check = document.getElementById("check");
var checkErr = document.getElementById("checkError");

check.onchange = checkReset;

function checkCheck() {
  if(check.checked == false) { // Проверка на установленную галочку
    checkErr.innerHTML = "Поставьте галочку разрешить отзывы";
    return false;
  }
  return true;
}

function checkReset() {
  if (check.checked == true) {
    checkErr.innerHTML = "";
  }
}

// Валидация поля Описание сайта
var desc = document.getElementById("description");
var descErr = document.getElementById("descriptionError");

desc.onblur = descCheck;
desc.onfocus = descReset;

function descCheck() {
  if (desc.value == "") { // Проверка на пустое поле
    desc.classList.add("invalid");
    descErr.innerHTML = "Поле не может быть пустым";
    return false;
  }
  return true;
}

function descReset() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    descErr.innerHTML = "";
  }
}
