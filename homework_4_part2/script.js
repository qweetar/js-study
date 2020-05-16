
function HashStorageFunc() {

  let hashObj = {};

  this.addValue = function addVal(key, value) {
    hashObj[key] = value;
  }

  this.getValue = function getVal(key) {
    return hashObj[key];
  }

  this.deleteValue = function deleteVal(key) {
    if (key in hashObj) {
      delete hashObj[key];
      return true;
    } else {
      return false;
    }

  }

  this.getKeys = function getK() {
    var tempArr = [];
    for (let key in hashObj) {
      tempArr.push(key);
    }
    return tempArr;
  }
}


var drinkStorage = new HashStorageFunc();

function addDrink() {
  var drinkName = prompt("Введите название напитка");
  var alcohol = prompt("Напиток алкогольный? Введите 'Да' или 'Нет'");
  var composition = prompt("Введите состав напитка через запятую: 'ингредиент_1, ингредиент_2, ..., ингредиент_n'");
  var recipe = prompt("Введите описание рецепта");
  var newDrink = {};
  newDrink.алкогольный = alcohol;
  newDrink.состав = composition.split(/,/);
  newDrink["рецепт приготовления"] = recipe;

  drinkStorage.addValue(drinkName, newDrink);
  alert("Напиток успешно добавлен в каталог!");
}

function delDrink() {
  var drinkName = prompt("Введите название напитка");
  if (drinkStorage.deleteValue(drinkName)) {
    alert("Наиток удален из каталога");
  } else {
    alert("Такого напитка нет в каталоге");
  }
}

function infoDrink() {
  var drinkName = prompt("Введите название напитка");
  var drinkInfo = drinkStorage.getValue(drinkName);
  if (drinkInfo === undefined) {
    alert("Нет такого напитка")
  } else {
  alert("Напиток " + drinkName +
        "\nАлкогольный: " + drinkInfo.алкогольный +
        "\nСостав: " + drinkInfo.состав +
        "\nРецепт приготовления: \n" +
         drinkInfo["рецепт приготовления"]);
  }
}

function listDrink() {
  var drinkList = drinkStorage.getKeys();
  alert("В каталоге имеются следующие напитки: " + drinkList);
}

var margarita = {
  алкогольный: "да",
  состав: ["Текила", "Ликер", "Лимонный сок", "Соль"],
  "рецепт приготовления": "Положите соль на плоскую тарелку. Опустите края бокалов в лаймовый (лимонный) сок, после чего опустите их в соль или сахар. В соль или сахар бокалы опускают для того, чтобы сделать красивую окантовку бокалам. Стряхните излишки соли и отставьте. Следующим шагом соедините сок лайма (лимона), текилу, апельсиновый ликер Куантро и оставшийся лаймовый сок. Коктейль следует готовить в шейкере с расколотым льдом или в блендере с большим количеством льда, нежели в шейкере."
};

var daiquiri = {
  алкогольный: "да",
  состав: ["Сок лайма", "Клубника", "Ликер", "Ром", "Сахарный сироп"],
  "рецепт приготовления": "Кубинская кухня – это не только великолепная еда, сочетающая в себе африканские, испанские и местные кулинарные традиции. Она также славится множеством коктейлей, основой которых, как правило, является ром (это национальный кубинский напиток). Кулинарный рецепт одного из них я сейчас вкратце опишу. Рецепт коктейля под названием Клубничный «Дайкири», придумал горный инженер Дженнигс Кокс, американец, который, придя в ярость от кубинской жары, решил смешать ром вместе с кислым лаймовым соком, а получившейся смесью залить кубики льда. Однако по-настоящему легендарным напиток сделал Эрнест Хемингуэй. Напиток весьма популярен с клубникой. Способ приготовления не отличается оригинальностью, достаточно поместить все компоненты этого коктейля в блендер и хорошенечко взбить. Естественно, напиток нужно употреблять со льдом. Он вкладывается в блендер непосредственно с компонентами. Подавать этот коктейль неплохо в бокале маргарита, который, конечно же, нужно украсить ломтиком лимона. Напиток хорошо пьется в летний жаркий день на морском побережье, и теперь вы лично можете убедиться в этом."
};

var mojito = {
  алкогольный: "да",
  состав: ["Лимоны", "Сахар", "Содовая", "Ром", "Мята", "Лед"],
  "рецепт приготовления": "Подготавливаем все ингредиенты для приготовления. Мяту и лимон хорошо вымываем. В посуде разминаем мяту вместе с сахаром. После добавляем лимонный сок. Если делает алкогольный коктейль вливаем ром (если безалкогольный, то ром просто не нужен). Получившую массу распределяем по бокалам. Нарезаем лимон (четвертинками, половинками и кружочками) и добавляем его в бокал. Кроме этого кладём листочки мяты. Досыпаем в бокалы лёд. Вливаем до вверху бокала содовую. Украшаем веточкой мяты и долькой лимона. Вставляем трубочку."
};

drinkStorage.addValue("Маргарита", margarita);
drinkStorage.addValue("Дайкири", daiquiri);
drinkStorage.addValue("Мохито", mojito);
