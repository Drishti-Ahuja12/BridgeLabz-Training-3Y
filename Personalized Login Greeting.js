// Declare variables
let userName = "Drishti";   // you can take input also
let currentHour = new Date().getHours();

// Logic for time-based greeting
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Output
console.log(greeting);
