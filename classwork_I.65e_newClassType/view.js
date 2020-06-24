// view

"user strict"

class ManViewWebPage {
  myModel = null; // с какой моделью работаем
  myField = null; // внутри какого элемента DOM наша вёрстка
  runCheckbox = null; // чекбокс "бег"
  manDiv = null; // сам человечек

  constructor() {
  }

  start(model, field) {
      this.myModel = model;
      this.myField = field;

      // ищем и запоминаем интересные нам элементы DOM
      this.runCheckbox = this.myField.querySelector('.SRun');
      this.manDiv = this.myField.querySelector('.SMan');
  }

  update() {
      this.runCheckbox.checked = this.myModel.isRun;
      this.manDiv.style.left = this.myModel.posX+"px";
      this.manDiv.style.top = this.myModel.posY+"px";
  }
};
