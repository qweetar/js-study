
//Script for pushind data to server

var info;

info = form1;
function store() {
storeInfo();

}
var form1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
{label:'URL сайта:',kind:'longtext',name:'siteurl'},
{label:'Посетителей в сутки:',kind:'number',name:'visitors'},
{label:'E-mail для связи:',kind:'shorttext',name:'email'},
{label:'Рубрика каталога:',kind:'combo',name:'division',
variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
{label:'Размещение:',kind:'radio',name:'payment',
variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
{label:'Разрешить отзывы:',kind:'check',name:'votes'},
{label:'Описание сайта:',kind:'memo',name:'description'},
{label:'Опубликовать:',kind:'submit'},
];
var form2=
[
{label:'Фамилия:',kind:'longtext',name:'lastname'},
{label:'Имя:',kind:'longtext',name:'firstname'},
{label:'Отчество:',kind:'longtext',name:'secondname'},
{label:'Возраст:',kind:'number',name:'age'},
{label:'Зарегистрироваться:',kind:'submit'},
];

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = "KUZMENOK_DYN_FORM2";

function storeInfo() {
  updatePassword = Math.random();
  $.ajax({
    url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
    data: {f: "LOCKGET", n: stringName, p: updatePassword},
    success: lockGetReady, error: errorHandler
  })
}

function lockGetReady(callresult) {
  if (callresult.error != undefined) {
    alert(callresult.error);
  } else {
    var newInfo = {
      form: form2

    }

    $.ajax({
      url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
      data: {f: "UPDATE", n: stringName, v: JSON.stringify(newInfo), p: updatePassword},
      success: updateReady, error: errorHandler
    })
  }
}


function updateReady(callresult) {
  if (callresult.error != undefined) {
    alert(callresult.error);
  }
}


function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + " " + errorStr);
}
