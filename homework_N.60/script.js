
"use strict";

var formFromServer1;
var formFromServer2;

function renderForm() {
  readInfo("KUZMENOK_DYN_FORM1");
  readInfo("KUZMENOK_DYN_FORM2");
}

function addHtml(form, formId) {

var htmlArray = form;

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

        var contElem=document.getElementById(formId);
        contElem.innerHTML=str;
}

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";

function readInfo(stringName) {
  $.ajax({
    url: ajaxHandlerScript,
    type: "POST",
    cache: false,
    dataType: "json",
    data: {f: "READ", n: stringName},
    success: readReady,
    error: errorHandler
  })
}

function readReady(callresult) {
  var newInfo = JSON.parse(callresult.result);
  console.log(callresult);
  if (callresult.error != undefined) {
    alert(callresult.error);
  } else if ("form1" in newInfo) {
    formFromServer1 = newInfo.form1;
    addHtml(formFromServer1, "myForm1");
  } else if ("form2" in newInfo) {
    formFromServer2 = newInfo.form2;
    addHtml(formFromServer2, "myForm2");
  }
}

function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + " " + errorStr);
}
