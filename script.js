'use strict';

/*document.querySelector('.message').textContent = '🍾 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

// Generate a radon number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20 ) + 1;

// Set the score to 20
let score = 20;

// Displaying the radon number
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        document.querySelector('.message').textContent = ' ⛔️ No Number entered!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = ' 🍾 Correct Number!';

        // When player win change body background color to green
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        //When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' ☝️ Too high!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 😭️ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' ☝️ Too high!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 😭️ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

