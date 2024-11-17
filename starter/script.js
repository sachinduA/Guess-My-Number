'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

//define secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        //When no input
        if (!guess) {
            document.querySelector('.message').textContent = '❌ No Number';
        }
        //When player wins
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number';
        }
        //When guess is too High
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📈 Number is Too High!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥You lost the game!!';
                document.querySelector('.score').textContent = 0;
            }

        }
        //when guess is too Low
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📉 Number is Too Low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥You lost the game!!';
                document.querySelector('.score').textContent = 0;
            }

        }
    });