"user strict"

class AJAXStorageFunc {
  ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
  updatePassword;
  stringName = "KUZMENOK_DYN_FORM_AJAX_";

  constructor(name) {
    this.stringName += name;
    this.ajaxObj = {}
    this.getAllData();
  }

  updateValue(ajaxObj) {
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

  getAllData() {
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
      this.ajaxObj = JSON.parse(callresult.result);
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


// test method for data riset
  deleteAll() {
    this.updatePassword = Math.random();
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "LOCKGET", n: this.stringName, p: this.updatePassword},
      success: this.deleteAllReady,
      error: this.errorHandler
    })
  }

  funcDeleteAllReady(callresult) {
    if (callresult.error != undefined) {
      alert(callresult.error);
    } else {
      var ajaxObj = {};
      }
      $.ajax({
        url: this.ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: {f: "UPDATE", n: this.stringName, v: JSON.stringify(ajaxObj), p: this.updatePassword},
        success: this.updateReady, error: this.errorHandler
      })
    }
    deleteAllReady = this.funcDeleteAllReady.bind(this);

}
