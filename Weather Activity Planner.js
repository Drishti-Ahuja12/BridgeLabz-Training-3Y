// Variables
let temperature = 18;
let isRaining = false;
let windSpeed = 25;

// Decision logic
let advice;

if (isRaining) {
    advice = "Stay indoors with hot coffee.";
}

else if (temperature > 35) {
    advice = "Go swimming.";
}

else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
}

else {
    advice = "Perfect day for a walk.";
}

console.log("Temperature:", temperature);
console.log("Raining:", isRaining);
console.log("Wind Speed:", windSpeed + " km/h");
console.log("Advice:", advice);
