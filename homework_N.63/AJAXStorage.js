"user strict"

class AJAXStorageFunc {
  ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
  updatePassword;
  stringName = "KUZMENOK_DYN_FORM_AJAX_";
  key;
  value;
  returnObj;
  constructor(name) {
    this.stringName += name;
    this.ajaxObj = {}
  }

  addValue(key, value) {
    this.key = key;
    this.value = value;
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
    } else if (callresult.result != "") {
      var ajaxObj = JSON.parse(callresult.result);
      ajaxObj[this.key] = this.value;
      alert(this.key + " успешно добавлен в каталог!");
    } else {
        var ajaxObj = this.ajaxObj;
        ajaxObj[this.key] = this.value;
        alert(this.key + " успешно добавлен в каталог!");
    }
      $.ajax({
        url: this.ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: {f: "UPDATE", n: this.stringName, v: JSON.stringify(ajaxObj), p: this.updatePassword},
        success: this.updateReady, error: this.errorHandler
      })
    }
    lockGetReady = this.funcLockGetReady.bind(this);

  getValue(key) {
    this.key = key;
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "READ", n: this.stringName},
      success: this.readReady,
      error: this.errorHandler
    })
  }

  funcReadReady(callresult) {
    var ajaxObj = JSON.parse(callresult.result);
    var info = ajaxObj[this.key];
    if (info === undefined) {
      alert(this.key + "нет в каталоге")
    } else {
      let alertStr = this.key + "\n";
      for (let key in info) {
        alertStr += key + ": " + info[key] + "\n";
      }
      alert(alertStr);
    }
  }
  readReady = this.funcReadReady.bind(this);

  deleteValue(key) {
    this.key = key;
    this.updatePassword = Math.random();
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "LOCKGET", n: this.stringName, p: this.updatePassword},
      success: this.deleteReady,
      error: this.errorHandler
    })
  }

  funcDeleteReady(callresult) {
    var ajaxObj = JSON.parse(callresult.result);
    if (callresult.error != undefined) {
      alert(callresult.error);
    } else if (ajaxObj[this.key]){
      delete ajaxObj[this.key];
      ajaxObj[this.key] = this.value;
      } else {
        alert("Нет в каталоге");
      }
      $.ajax({
        url: this.ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
        data: {f: "UPDATE", n: this.stringName, v: JSON.stringify(ajaxObj), p: this.updatePassword},
        success: this.updateReady, error: this.errorHandler
      })

      alert("Удаление прошло успешно");
    }
    deleteReady = this.funcDeleteReady.bind(this);

  getKeys() {
    $.ajax({
      url: this.ajaxHandlerScript,
      type: "POST",
      cache: false,
      dataType: "json",
      data: {f: "READ", n: this.stringName},
      success: this.readKeysReady,
      error: this.errorHandler
    })
  }

  funcReadKeysReady(callresult) {
      var ajaxObj = JSON.parse(callresult.result);
      var tempArr = [];
      for (let key in ajaxObj) {
        tempArr.push(key);
      }
      var itemList = tempArr;
      if (itemList.length == 0) {
        alert("Каталог пуст");
      } else {
        alert("В каталоге имеются: " + itemList);
      }
  }
  readKeysReady = this.funcReadKeysReady.bind(this);

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
