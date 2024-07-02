let targetNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    let result = '';
    
    if (guess < targetNumber) {
        result = 'Too low!';
    } else if (guess > targetNumber) {
        result = 'Too high!';
    } else {
        result = 'Congratulations! You guessed it!';
    }

    document.getElementById('result').innerText = result;
}
