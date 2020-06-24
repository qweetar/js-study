"use strict";

   // model

class ManModel {
  constructor() {
    this.posX = 50;
    this.posY = 50;
    this.isRun = false;
  }

    myView = null;

  start(view) {
      this.myView = view;
  }

  updateView() {
      // при любых изменениях модели попадаем сюда
      // представление может быть любым,
      // лишь бы имело метод update()
      if ( this.myView )
          this.myView.update();
  };

  shift(x, y) {
      this.posX += (this.isRun ? 30 : 5) * x;
      this.posY += (this.isRun ? 30 : 5 ) * y;
      this.updateView(); // модель при любых изменениях
      // вызывает обновление представления
  };

  setRun(r) {
      this.isRun = r;
      this.updateView(); // модель при любых изменениях
      // вызывает обновление представления
  }

};
