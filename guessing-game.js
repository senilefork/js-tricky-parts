function guessingGame() {
    let num = Math.floor(Math.random() * 100);
    let count = 0;
    let gameOver = false;

    return function handleGuess(guess){
        count++
        if(gameOver) return "The game is over, you already won!"
        if(num === guess){
            let guessWord = count > 1 ? 'guesses' : 'guess';
            gameOver = true;
            return `You win! You found ${num} in ${count} ${guessWord}.`
        }
        if(guess < num){
            return `${guess} is too low!`
        }
        if(guess > num){
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
