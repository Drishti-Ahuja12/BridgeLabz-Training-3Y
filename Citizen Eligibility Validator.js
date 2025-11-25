// Inputs
let age = 19;           // change test value
let isCitizen = true;   // true / false

let result;

// Nested eligibility logic
if (age >= 18) {  
    // Person meets age criteria

    if (isCitizen) {
        // Citizen + 18 or above
        if (age >= 21) {
            result = "Eligible for all services.";
        } else {
            result = "Eligible to vote only.";
        }
    } else {
        // Not a citizen but adult
        result = "Only age criteria met.";
    }

} else {
    // Underage → not eligible for any
    result = "Not eligible for any services.";
}

// Output
console.log("Age:", age);
console.log("Citizen:", isCitizen);
console.log("Result:", result);
