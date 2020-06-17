"user strict"

// import LocStorage from './locStorage.js'; 

class LocStorage {
  ls = window.localStorage;

  addValue(key, value) {
    var jsonValue = JSON.stringify(value);
    this.ls.setItem(key, jsonValue);
  }

  getValue(key) {
    var value = this.ls.getItem(key);
    var jsonValue = JSON.parse(value);
    return jsonValue;
  }

  deleteAll(key) {
    var value = this.ls.removeItem(key);
  }
}

var locStorage = new LocStorage();

class HashStorageFunc {
  hashObj = {}

  addValue(lskey, key, value) {
    var hashObj = this.hashObj;
    hashObj[key] = value;
    locStorage.addValue(lskey, hashObj);
  }

  getValue(lskey, key) {
    var hashObj = this.hashObj;
    hashObj = locStorage.getValue(lskey);
    console.log(hashObj)
    return hashObj[key];
  }

  deleteValue(lskey, key) {
    var hashObj = locStorage.getValue(lskey);
    if (key in hashObj) {
      delete hashObj[key];
      locStorage.addValue(lskey, hashObj);
      return true;
    } else {
      return false;
    }
  }

  getKeys(lskey) {
    var hashObj = locStorage.getValue(lskey);
    var tempArr = [];
    for (let key in hashObj) {
      tempArr.push(key);
    }
    return tempArr;
  }

  deleteAll(lskey) {
    locStorage.deleteAll(lskey);
  }
}



var foodStorage = new HashStorageFunc();

function addFood() {
  var foodName = prompt("Введите название блюда");
  var composition = prompt('Введите состав блюда через запятую: "ингредиент_1, ингредиент_2, ..., ингредиент_n"');
  var recipe = prompt("Введите описание рецепта");
  var newFood = {};
  newFood.состав = composition.split(/,/);
  newDrink["рецепт преготовления"] = recipe;

  foodStorage.addValue("food", foodName, newFood);
  alert("Блюдо успешно добавлено в каталог!");
}

function delFood() {
  var foodName = prompt("Введите название напитка");
  if (foodStorage.deleteValue("food", foodName)) {
    alert("Блюдо удалено из каталога");
  } else {
    alert("Такого напитка нет в каталоге");
  }
}

function infoFood() {
  var foodName = prompt("Введите название блюда");
  var foodInfo = foodStorage.getValue("food", foodName);
  if (foodInfo === undefined) {
    alert("Нет такого блюда");
  } else {
    alert("Блюдо " + foodName +
          "\nСостав: " + foodInfo.состав +
          "\nРецепт приготовления: \n" +
           foodInfo["рецепт приготовления"])
  }
}

function listFood() {
  var foodList = foodStorage.getKeys("food");
  if (foodList === undefined) {
    alert("Каталог пуст");
  } else {
    alert("В каталоге имеются следующие блюда: " + foodList);
  }
}

function foodAutoFill() {
  var hotDog = {
    состав: ["Булочка", "Сасиска", "Кетчуп", "Майонез", "Горчица"],
    "рецепт приготовления": "Выложить булочки на сковороду гриль без масла. Придавить их разделочной доской или другим грузом. Обжарить с каждой стороны до аппетитной румяности. На той же сковородке приготовить венские сосиски. Они должны стать румяными и покрыться легкими «подпалинами». Смазать булочки изнутри горчицей, используя кофейную ложечку с длинной ручкой. Туда же добавить смесь из оливкового майонеза и кетчупа."
  };

  var sandvich = {
    состав: ["Хлеб", "Яйца", "Соль", "Перец", "Оливковое масло"],
    "рецепт приготовления": "В ломтиках хлеба вырезать мякоть, оставить только корку по 1 см от края. Разогреть масло на сковороде. Выложить хлеб на сковороду. В каждую рамку разбить одно яйцо. Соль, перец по вкусу. Жарить, не накрывая крышкой ( для глазуньи) или с крышкой."
  };

  foodStorage.addValue("food", "Хот-Дог", hotDog);
  foodStorage.addValue("food", "Сэндвич", sandvich);
}

function foodAutoRemove() {
  foodStorage.deleteAll("food");
}

var drinkStorage = new HashStorageFunc();

function addDrink() {
  var drinkName = prompt("Введите название напитка");
  var alcohol = prompt("Напиток алкогольный? Введите 'Да' или 'Нет'");
  var composition = prompt('Введите состав напитка через запятую: "ингредиент_1, ингредиент_2, ..., ингредиент_n"');
  var recipe = prompt("Введите описание рецепта");
  var newDrink = {};
  newDrink.алкогольный = alcohol;
  newDrink.состав = composition.split(/,/);
  newDrink["рецепт приготовления"] = recipe;

  drinkStorage.addValue("drink", drinkName, newDrink);
  alert("Напиток успешно добавлен в каталог!");
}

function delDrink() {
  var drinkName = prompt("Введите название напитка");
  if (drinkStorage.deleteValue("drink", drinkName)) {
    alert("Напиток удален из каталога");
  } else {
    alert("Такого напитка нет в каталоге");
  }
}

function infoDrink() {
  var drinkName = prompt("Введите название напитка");
  var drinkInfo = drinkStorage.getValue("drink", drinkName);
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
  var drinkList = drinkStorage.getKeys("drink");
  if (drinkList === undefined) {
    alert("Каталог пуст");
  } else {
    alert("В каталоге имеются следующие напитки: " + drinkList);
  }
}


function drinkAutoFill() {
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

  drinkStorage.addValue("drink", "Маргарита", margarita);
  drinkStorage.addValue("drink", "Дайкири", daiquiri);
  drinkStorage.addValue("drink", "Мохито", mojito);
}

function drinkAutoRemove() {
  drinkStorage.deleteAll("drink");
}
