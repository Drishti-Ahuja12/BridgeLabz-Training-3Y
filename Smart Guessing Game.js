// Generate secret number between 1–50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// User guess (test value)
let userGuess = 23; // change this to test

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Guess checking logic
if (userGuess === secretNumber) {

    console.log("Correct guess!");

} else {
    
    // Nested condition for close guesses
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else {
        // Too high or too low
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}
