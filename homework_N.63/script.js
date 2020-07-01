"user strict"

var foodStorage = new AJAXStorageFunc("food");

function addFood() {
  var foodName = prompt("Введите название блюда");
  var composition = prompt('Введите состав блюда через запятую: "ингредиент_1, ингредиент_2, ..., ингредиент_n"');
  var recipe = prompt("Введите описание рецепта");
  var newFood = {};
  newFood.состав = composition.split(/,/);
  newFood["рецепт приготовления"] = recipe;

  foodStorage.addValue(foodName, newFood);
}

function delFood() {
  var foodName = prompt("Введите название блюда");
  foodStorage.deleteValue(foodName);
}

function infoFood() {
  var foodName = prompt("Введите название блюда");
  foodStorage.getValue(foodName);
}

function listFood() {
  foodStorage.getKeys();
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

  drinkStorage.addValue(drinkName, newDrink);
}

function delDrink() {
  var drinkName = prompt("Введите название напитка");
  drinkStorage.deleteValue(drinkName);
}

function infoDrink() {
  var drinkName = prompt("Введите название напитка");
  drinkStorage.getValue(drinkName);
}

function listDrink() {
  drinkStorage.getKeys();
}

function drinkAutoRemove() {
  drinkStorage.deleteAll();
}
