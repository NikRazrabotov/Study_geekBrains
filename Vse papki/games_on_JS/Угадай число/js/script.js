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
