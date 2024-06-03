console.log(getPriceByCount("Манго", 5));
console.log(getPriceByCount("Авокадо", 50));

function getPriceByCount(good, count) {
  const price = getGoodPrice(good);

  if (price === false) {
    console.log("Товар не найден.")
  } else {
    return price * count;
  }
}

function getGoodPrice(good) {
  switch (good) {
    case "Бананы":
      return 50;
    case "Манго":
      return 80;
    case "Яблоки":
    case "Груши":
      return 40;
    default:
      return false;
  }
}
// let myGood = prompt("Введите товар");
// sayPrice(myGood);
// sayPrice("Манго");

// function sayPrice(good) {
//   if (good === "Бананы") {
//     alert("Цена на бананы 50 руб./кг.");
//   } else if (good === "Манго") {
//     alert("Цена на манго 80 руб./кг.");
//   } else if (good === "Яблоки" || good === "Груши") {
//     alert("На яблоки и груши одна цена - 40 руб./кг.");
//   } else {
//     alert("Неизвестный фрукт");
//   }
// }

// function add(a, b) {
//   const sum = a + b;
//   return sum;
// }

// const mySum = add(2, 3);
// console.log(mySum);