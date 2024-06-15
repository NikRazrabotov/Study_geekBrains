// Угадай число
let number; // будет хранится число которое загадал комп, а игрок должен отгадать
let attempts; // ( Кол-во ) сколько пользователь сделал попыток, чтобы число отгадать.

resetGame();
tryGuessNumber();

function resetGame() {
  attempts = 0;
  number = Math.floor(Math.random() * 100);
}

function tryGuessNumber() {
  const userAnswer = parseInt(prompt("Введите число от 0 до 99, для выхода наберите -1."));

  if (userAnswer === -1) {
    alert("До свидания!")
    return; //Выход из игры. (return поставлен что бы выйти если даже будет написан далее код)
  }

  if (Number.isNaN(userAnswer) || userAnswer < 0 || userAnswer > 99) {// Проверка на корректность вводимы чисел, не строк.
    alert('Необходимо ввести целое число от 0 до 100.');
    tryGuessNumber();
    return;
  }

  attempts++;

  if (userAnswer > number) {
    alert("Попробую ввести число меньше.")
  } else if (userAnswer < number) {
    alert("Попробую ввести число по больше")
  } else {
    alert(`Поздравляю! Вы угадали число с ${attempts} попытки.`);

    if (!confirm("Хотите сыграть ещё раз?")) {
      alert("До свидания!")
      return;
    }
    resetGame();
  }


  tryGuessNumber();
}




//________________________________________________
// function rec(x) {
//   if (x === 1) {
//     return 1;
//   }

//   return rec(x - 1) + x;
// }

// console.log(rec(3));// функция передаст сложенное число от еденицы до 3-х. 1+2+3




// console.log(getPriceByCount("Манго", 5));
// console.log(getPriceByCount("Авокадо", 5));

// // getPriceByCount -- дай цену за кол-во товара
// function getPriceByCount(good, count) {
//   const price = getGoodPrice(good);
//   if (price === false) {
//     console.log("Товар не найден");
//     return false; // return для примера как можно еще.
//   }
//   return price * count;
// }

// function getGoodPrice(good) {
//   switch (good) {
//     case "Бананы":
//       return 50;
//     case "Манго":
//       return 80;
//     case "Яблоки":
//     case "Груши":
//       return 40;
//     default:
//       return false;
//   }
// }



// console.log(getPriceByCount("Манго", 5));
// console.log(getPriceByCount("Авокадо", 50));

// function getPriceByCount(good, count) {
//   const price = getGoodPrice(good);

//   if (price === false) {
//     console.log("Товар не найден.")
//   } else {
//     return price * count;
//   }
// }

// function getGoodPrice(good) {
//   switch (good) {
//     case "Бананы":
//       return 50;
//     case "Манго":
//       return 80;
//     case "Яблоки":
//     case "Груши":
//       return 40;
//     default:
//       return false;
//   }
// }



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


