// controller

"user strict"

class ManControllerButtons {
  constructor() {
  }

  myModel = null; // с какой моделью работаем
  myField = null; // внутри какого элемента DOM наша вёрстка
  runCheckbox = null; // чекбокс "бег"

  start(model, field) {
      this.myModel = model;
      this.myField = field;

      // ищем и запоминаем интересные нам элементы DOM
      // назначаем обработчики событий

      this.runCheckbox = this.myField.querySelector('.SRun');
      this.runCheckbox.addEventListener('change', this.runChanged);

      var buttonUp = this.myField.querySelector('.SUp');
      buttonUp.addEventListener('click', this.shiftUp);
      var buttonDown = this.myField.querySelector('.SDown');
      buttonDown.addEventListener('click', this.shiftDown);
      var buttonLeft = this.myField.querySelector('.SLeft');
      buttonLeft.addEventListener('click', this.shiftLeft);
      var buttonRight = this.myField.querySelector('.SRight');
      buttonRight.addEventListener('click', this.shiftRight);
  }


  funcShiftLeft() {
      this.myModel.shift(-1, 0); // контроллер вызывает только методы модели
  }
  shiftLeft = this.funcShiftLeft.bind(this);

  funcShiftRight() {
      this.myModel.shift(1, 0); // контроллер вызывает только методы модели
  }
  shiftRight = this.funcShiftRight.bind(this);

  funcShiftUp() {
      this.myModel.shift(0, -1); // контроллер вызывает только методы модели
  }
  shiftUp = this.funcShiftUp.bind(this);

  funcShiftDown() {
      this.myModel.shift(0, 1); // контроллер вызывает только методы модели
  }
  shiftDown = this.funcShiftDown.bind(this);

  funcRunChanged() {
      if ( this.myModel ) // контроллер вызывает только методы модели
          this.myModel.setRun(this.runCheckbox.checked);
  }
  runChanged = this.funcRunChanged.bind(this);

}
