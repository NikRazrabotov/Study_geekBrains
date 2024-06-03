let myGood = prompt("Введите товар");
sayPrice(myGood);
sayPrice("Манго");

function sayPrice(good) {
  if (good === "Бананы") {
    alert("Цена на бананы 50 руб./кг.");
  } else if (good === "Манго") {
    alert("Цена на манго 80 руб./кг.");
  } else if (good === "Яблоки" || good === "Груши") {
    alert("На яблоки и груши одна цена - 40 руб./кг.");
  } else {
    alert("Неизвестный фрукт");
  }
}