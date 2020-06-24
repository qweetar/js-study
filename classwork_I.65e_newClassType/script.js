// настройка, инициализация первого комплекта

"user strict"

   // создаём все три компонента
   var man1 = new ManModel();
   var view1 = new ManViewWebPage();
   var controller1 = new ManControllerButtons();

   // увязываем компоненты друг с другом
   // указываем компонентам, в каком DOM им работать
   var containerElem1 = document.getElementById('IMan1Container');
   man1.start(view1);
   view1.start(man1,containerElem1);
   controller1.start(man1,containerElem1);

   // инициируем первичное отображение Model во View
   man1.updateView();

   // настройка, инициализация второго комплекта

   // создаём все три компонента
   var man2 = new ManModel();
   var view2 = new ManViewWebPage();
   var controller2 = new ManControllerButtons();

   // увязываем компоненты друг с другом
   // указываем компонентам, в каком DOM им работать
   var containerElem2 = document.getElementById('IMan2Container');
   man2.start(view2);
   view2.start(man2,containerElem2);
   controller2.start(man2,containerElem2);

   // инициируем первичное отображение Model во View
   man2.updateView();
