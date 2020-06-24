// view

"user strict"

    function ManViewWebPage() {
        var myModel = null; // с какой моделью работаем
        var myField = null; // внутри какого элемента DOM наша вёрстка
        var runCheckbox = null; // чекбокс "бег"
        var manDiv = null; // сам человечек

        this.start=function(model,field) {
            myModel=model;
            myField=field;

            // ищем и запоминаем интересные нам элементы DOM
            runCheckbox=myField.querySelector('.SRun');
            manDiv=myField.querySelector('.SMan');
        }

        this.update=function() {
            runCheckbox.checked=myModel.isRun;
            manDiv.style.left=myModel.posX+"px";
            manDiv.style.top=myModel.posY+"px";
        }

    };
