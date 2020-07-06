"user strict"

window.onhashchange = switchToStateFromURLHash;

var poem = new AJAXStorageFunc("KUZMENOK_ENCYCLO");
var poemHtml = new AjaxHtmlStorageFunc();
fillMain();

var SPAState = {};

function switchToStateFromURLHash() {
  var URLHash = window.location.hash;

  var stateStr = URLHash.substr(1);

  if (stateStr != "") {
    var parts = stateStr.split("_");
    SPAState = {pagename: parts[0]};
    if (SPAState.pagename == "poem")
    SPAState.poemname = decodeURI(parts[1]);
  } else {
    SPAState = {pagename: "main"};
  }

    console.log("Новое состояние приложения!");
    console.log(SPAState);

    var pageHTML = "";
    switch (SPAState.pagename) {
      case "main":
        fillMain();
        break;
      case "catalog":
        fillCatalog();
        break;
      case "poem":
        var poem =
        fillPoem(SPAState.poemname);
        break;
    }
}

function fillMain() {
  pageHTML = "<h2>Агния Барто</h1><a href='#catalog'>Список стихотворений</a>";
  document.getElementById("IPage").innerHTML = pageHTML;
}

function fillCatalog() {
  pageHTML = "<h3>Оглавление</h1>";
  var letter = "";
  for (let key in poem.ajaxObj) {
    if (key[0] != letter) {
      pageHTML += "<h3>" + poem.ajaxObj[key][0] + "</h3>";
      pageHTML += "<a href='#poem_" + key + "'>" + poem.ajaxObj[key] + "</a><br>";
      letter = key[0];
    } else {
      pageHTML += "<a href='#poem_" + key + "'>" + poem.ajaxObj[key] + "</a><br>";
    }
  }
  document.getElementById("IPage").innerHTML = pageHTML;
}

function fillPoem(poemName) {
  poemHtml.getAllData(poemName);
  pageHTML = "<h3>Агния Барто</h3><div class='container'><div class='row'><div class='col-3'><ul class='list-group list-group-flush'>";
  for (let key in poem.ajaxObj) {
    pageHTML += "<li class='list-group-item'><a href='#poem_" + key + "'>" + poem.ajaxObj[key] + "</a></li>";
  }
  pageHTML += "</ul></div><div class='col-6'><h3>" + poem.ajaxObj[poemName] + "</h3><div id='curpoem'></div></div></div>";
  document.getElementById("IPage").innerHTML = pageHTML;
}
