"user strict"

class HashStorageFunc {
  constructor(name) {
    this.name = name;
    var lsObj = this.ls.getItem(name);
    this.hashObj = JSON.parse(lsObj);
    if (this.hashObj === null) {
      this.hashObj = {}
    }
  }

  ls = window.localStorage;

  addValue(key, value) {
    var hashObj = this.hashObj;
    hashObj[key] = value;
    hashObj = JSON.stringify(hashObj);
    this.ls.setItem(this.name, hashObj);
  }

  getValue(key) {
    var hashObj = this.hashObj;
    return hashObj[key];
  }

  deleteValue(key) {
    var hashObj = this.hashObj;
    if (key in hashObj) {
      delete hashObj[key];
      var jsonValue = JSON.stringify(hashObj);
      this.ls.setItem(this.name, jsonValue);
      return true;
    } else {
      return false;
    }
  }

  getKeys() {
    var hashObj = this.hashObj;
    var tempArr = [];
    for (let key in hashObj) {
      tempArr.push(key);
    }
    return tempArr;
  }

  deleteAll() {
    this.ls.removeItem(this.name);
    this.hashObj = {}
  }
}
