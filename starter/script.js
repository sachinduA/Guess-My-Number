'use strict';

//define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

let score = 20;

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
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
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
    }
    );

//again button
document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Start guessing...';

    }
);