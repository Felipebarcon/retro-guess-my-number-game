'use strict';

/*document.querySelector('.message').textContent = '🍾 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

// Generate a radon number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20 ) + 1;

// Set the score to 20
let score = 20;

// Set Highscore to 0
let highscore = 0;

// Display message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = ' ⛔️ No Number entered!';
        displayMessage(' ⛔️ No Number entered!');

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = ' 🍾 Correct Number!';
        displayMessage(' 🍾 Correct Number!');

        // Displaying the radon number
        document.querySelector('.number').textContent = secretNumber;

        // When player win change body background color to green
        document.querySelector('body').style.backgroundColor = '#60b347';

        // When player win change number font size
        document.querySelector('.number').style.width = '30rem';

        // Check highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When player is wrong
    } else if(guess !== secretNumber) {
        displayMessage(guess > secretNumber ? '☝️ Too high!' : '👇️ Too low!');
        score --;
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = '😭️ You lost the game!';
        displayMessage('😭️ You lost the game!');
        document.querySelector('.score').textContent = 0;
    }

    // Repeated code fixed above ☝️
    //When guess is too high
/*    else if (guess > secretNumber) {
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
            document.querySelector('.message').textContent = ' 👇️ Too low!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' 😭️ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }*/
});

// Reset the game functionality
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 ) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})