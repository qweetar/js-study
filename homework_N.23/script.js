
"use strict";

function addFirstArray() {
  addHtml(formDef1);
}
function addSecondArray() {
  addHtml(formDef2);
}

function addHtml(sentArray) {

var htmlArray = sentArray;

        var str='';
        str+="<div>";
        for ( var i = 0; i < htmlArray.length; i++ ) {
          if (htmlArray[i].kind === "longtext") {
            str+= "<label>" + htmlArray[i].label + "</label><input id='longtext' name='" + htmlArray[i].name + "'></input><br>";
          } else if (htmlArray[i].kind === "number") {
            str+= "<label>" + htmlArray[i].label + "</label><input id='number' type='number' name='" + htmlArray[i].name + "'></input><br>";
          } else if (htmlArray[i].kind === "shorttext") {
            str+= "<label>" + htmlArray[i].label + "</label><input id='shorttext' name='" + htmlArray[i].name + "'></input><br>";
          } else if (htmlArray[i].kind === "check") {
            str+= "<label>" + htmlArray[i].label + "</label><input id='check' type='checkbox' name='" + htmlArray[i].name + "'></input><br>";
          } else if (htmlArray[i].kind === "memo") {
            str+= "<label>" + htmlArray[i].label + "</label><br><textarea id='memo' name='" + htmlArray[i].name + "'></textarea><br>";
          } else if (htmlArray[i].kind === "submit") {
            str+="<button>" + htmlArray[i].label + "</button>";
          } else if (htmlArray[i].kind === "combo") {
            str+= "<label>" + htmlArray[i].label + "</label><select id='combo' name='" + htmlArray[i].name + "'>"
            for (var j = 0; j < htmlArray[i].variants.length; j++) {
              str+= "<option value='" + htmlArray[i].variants[j].value + "'>" + htmlArray[i].variants[j].text + "</option>";
            }
            str+= "</select><br>"
          } else if (htmlArray[i].kind === "radio") {
            str+= "<label>" + htmlArray[i].label + "</label>";
            for (var j = 0; j < htmlArray[i].variants.length; j++) {
              str+= "<input id='radio' type='radio' name='" + htmlArray[i].name + "' value='" + htmlArray[i].variants[j].value + "'>" + htmlArray[i].variants[j].text + "</option>";
            }
            str+= "<br>";
          }
        }

        str+="</div>";

        var contElem=document.getElementById('myForm');
        contElem.innerHTML=str;
        console.log(contElem.innerHTML);
}


var formDef1=
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
var formDef2=
[
{label:'Фамилия:',kind:'longtext',name:'lastname'},
{label:'Имя:',kind:'longtext',name:'firstname'},
{label:'Отчество:',kind:'longtext',name:'secondname'},
{label:'Возраст:',kind:'number',name:'age'},
{label:'Зарегистрироваться:',kind:'submit'},
];
