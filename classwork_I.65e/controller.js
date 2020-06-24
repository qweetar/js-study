// controller

"user strict"

  function ManControllerButtons() {
      var myModel = null; // с какой моделью работаем
      var myField = null; // внутри какого элемента DOM наша вёрстка
      var runCheckbox = null; // чекбокс "бег"

      this.start=function(model,field) {
          myModel=model;
          myField=field;

          // ищем и запоминаем интересные нам элементы DOM
          // назначаем обработчики событий

          runCheckbox=myField.querySelector('.SRun');
          runCheckbox.addEventListener('change',this.runChanged);

          var buttonUp=myField.querySelector('.SUp');
          buttonUp.addEventListener('click',this.shiftUp);
          var buttonDown=myField.querySelector('.SDown');
          buttonDown.addEventListener('click',this.shiftDown);
          var buttonLeft=myField.querySelector('.SLeft');
          buttonLeft.addEventListener('click',this.shiftLeft);
          var buttonRight=myField.querySelector('.SRight');
          buttonRight.addEventListener('click',this.shiftRight);
      }

      this.shiftLeft=function() {
          myModel.shift(-1,0); // контроллер вызывает только методы модели
      }

      this.shiftRight=function() {
          myModel.shift(1,0); // контроллер вызывает только методы модели
      }

      this.shiftUp=function() {
          myModel.shift(0,-1); // контроллер вызывает только методы модели
      }

      this.shiftDown=function() {
          myModel.shift(0,1); // контроллер вызывает только методы модели
      }

      this.runChanged=function() {
          if ( myModel ) // контроллер вызывает только методы модели
              myModel.setRun(runCheckbox.checked);
      }

  }
