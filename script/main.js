" use strict ";


let gameNumber = +prompt("Угадай число от 1 до 100");
let botNumber;
function guessNumber() {
    botNumber = parseInt(Math.random() * 100);
    if (gameNumber > botNumber) {
        console.log("Загаданное число меньше");
    } else if (isNaN(gameNumber) || gameNumber == '') {
        alert("Введи число!");
    } else if (gameNumber < botNumber) {
        alert("Загаданное число больше");
    } else if (gameNumber == botNumber) {
        alert("Поздравляю, Вы угадали!!!");

    } else {
        alert("Игра окончена");

    }

};
guessNumber();


