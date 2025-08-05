let firstNum = 8;
let secondNum = 10;
let sum = firstNum + secondNum;
let isAlive = true;
let hasBlackJack = false;

let messageEl = document.getElementById("message-el");

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}