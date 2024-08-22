'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1); // trunc tam sayıya çevirir


let score = 10;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click',

    function () {
        let guess = Number(document.querySelector('.guess').value);


        if (!guess) {
            displayMessage('⛔️ No number!');
        }
        else if (score === 0) {
            document.querySelector('.score').textContent = 0
            displayMessage('💥You Lost');
        }
        else if (guess === secretNumber) {
            displayMessage('🎉 Correct Number');

            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore
            }
        }
        else if (guess > secretNumber) {
            displayMessage('📈 Too High!')

            score--;
            document.querySelector('.score').textContent = score;
        }
        else if (guess < secretNumber) {
            displayMessage('📉 Too Low!')

            score--;
            document.querySelector('.score').textContent = score;
        }
    });


document.querySelector('.again').addEventListener('click',
    function () {
        score = 10;
        secretNumber = Math.trunc(Math.random() * 20 + 1)
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.score').textContent = '10';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
    }
);


