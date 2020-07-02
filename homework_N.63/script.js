"user strict"

var foodStorage = new AJAXStorageFunc("food");

function addFood() {
  var foodName = prompt("Введите название блюда");
  var composition = prompt('Введите состав блюда через запятую: "ингредиент_1, ингредиент_2, ..., ингредиент_n"');
  var recipe = prompt("Введите описание рецепта");
  var newFood = {};
  newFood.состав = composition.split(/,/);
  newFood["рецепт приготовления"] = recipe;
  foodStorage.ajaxObj[foodName] = newFood;
  foodStorage.updateValue(foodStorage.ajaxObj);
  alert(foodName + " успешно добавлен в каталог!");
}

function delFood() {
  var foodName = prompt("Введите название блюда");
  if (foodStorage.ajaxObj[foodName]) {
    delete foodStorage.ajaxObj[foodName];
    foodStorage.updateValue(foodStorage.ajaxObj);
  } else {
    alert("Нет в каталоге");
  }

}

function infoFood() {
  var foodName = prompt("Введите название блюда");
  var info = foodStorage.ajaxObj[foodName];
  if (info === undefined) {
    alert(foodName + " нет в каталоге")
  } else {
    let alertStr = foodName + "\n";
    for (let key in info) {
      alertStr += key + ": " + info[key] + "\n";
    }
    alert(alertStr);
  }
}

function listFood() {
  var itemList = [];
  for (let key in foodStorage.ajaxObj) {
    itemList.push(key);
  }
  if (itemList.length == 0) {
    alert("Каталог пуст");
  } else {
    alert("В каталоге имеются: " + itemList);
  }
}

function foodAutoRemove() {
  foodStorage.deleteAll();
}

var drinkStorage = new AJAXStorageFunc("drinks");

function addDrink() {
  var drinkName = prompt("Введите название напитка");
  var alcohol = prompt("Напиток алкогольный? Введите 'Да' или 'Нет'");
  var composition = prompt('Введите состав напитка через запятую: "ингредиент_1, ингредиент_2, ..., ингредиент_n"');
  var recipe = prompt("Введите описание рецепта");
  var newDrink = {};
  newDrink.алкогольный = alcohol;
  newDrink.состав = composition.split(/,/);
  newDrink["рецепт приготовления"] = recipe;
  drinkStorage.ajaxObj[drinkName] = newDrink;
  drinkStorage.updateValue(drinkStorage.ajaxObj);
  alert(drinkName + " успешно добавлен в каталог");
}

function delDrink() {
  var drinkName = prompt("Введите название напитка");
  if (drinkStorage.ajaxObj[drinkName]) {
    delete drinkStorage.ajaxObj[drinkName];
    drinkStorage.updateValue(drinkStorage.ajaxObj);
  } else {
    alert("Нет в каталоге");
  }
}

function infoDrink() {
  var drinkName = prompt("Введите название напитка");
  var info = drinkStorage.ajaxObj[drinkName];
  if (info === undefined) {
    alert(drinkName + " нет в каталоге")
  } else {
    let alertStr = drinkName + "\n";
    for (let key in info) {
      alertStr += key + ": " + info[key] + "\n";
    }
    alert(alertStr);
  }
}

function listDrink() {
  var itemList = [];
  for (let key in drinkStorage.ajaxObj) {
    itemList.push(key);
  }
  if (itemList.length == 0) {
    alert("Каталог пуст");
  } else {
    alert("В каталоге имеются: " + itemList);
  }
}

function drinkAutoRemove() {
  drinkStorage.deleteAll();
}
