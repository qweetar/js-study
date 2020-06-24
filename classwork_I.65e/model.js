"use strict";

   // model

   function ManModel() {
       this.posX = 50;
       this.posY = 50;
       this.isRun = false;

       var myView = null;

       this.start=function(view) {
           myView=view;
       }

       this.updateView=function() {
           // при любых изменениях модели попадаем сюда
           // представление может быть любым,
           // лишь бы имело метод update()
           if ( myView )
               myView.update();
       };

       this.shift=function(x,y) {
           this.posX+=(this.isRun?30:5)*x;
           this.posY+=(this.isRun?30:5)*y;
           this.updateView(); // модель при любых изменениях
           // вызывает обновление представления
       };

       this.setRun=function(r) {
           this.isRun=r;
           this.updateView(); // модель при любых изменениях
           // вызывает обновление представления
       }

   };
