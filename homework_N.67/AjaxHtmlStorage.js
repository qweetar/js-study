"user strict"

class AjaxHtmlStorageFunc {
  ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
  updatePassword;
  stringName = "KUZMENOK_ENCYCLO_";

  constructor() {
    this.ajaxObj = {};
  }

  updateValue(name, ajaxObj) {
    this.stringName = "KUZMENOK_ENCYCLO_";
    this.stringName += name;
    this.ajaxObj = ajaxObj;
    this.updatePassword = Math.random();
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "LOCKGET", n: this.stringName, p: this.updatePassword},
      success: this.lockGetReady,
      error: this.errorHandler
    })
  }

  funcLockGetReady(callresult) {
    if (callresult.error != undefined) {
      alert(callresult.error);
    }
      $.ajax({
        url: this.ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: {f: "UPDATE", n: this.stringName, v: JSON.stringify(this.ajaxObj), p: this.updatePassword},
        success: this.updateReady, error: this.errorHandler
      })
    }
    lockGetReady = this.funcLockGetReady.bind(this);

  getAllData(name) {
    this.stringName = "KUZMENOK_ENCYCLO_";
    this.stringName += name;
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "READ", n: this.stringName},
      success: this.readAllData,
      error: this.errorHandler
    })
  }

  funcReadAllData(callresult) {
    if (callresult.result != "") {
      var poem = JSON.parse(callresult.result);
      document.getElementById("curpoem").innerHTML = poem;
    }
  }
  readAllData = this.funcReadAllData.bind(this);

    updateReady(callresult) {
      if (callresult.error != undefined) {
        alert(callresult.error);
      }
    }

    errorHandler(jqXHR, statusStr, errorStr) {
      alert(statusStr + " " + errorStr);
    }
}
