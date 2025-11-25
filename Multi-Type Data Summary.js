// Declaring variables of different data types
let userName = "Drishti";          // string
let age = 21;                      // number
let isStudent = true;              // boolean
let hobbies = ["coding", "music"]; // array
let profile = { city: "Delhi" };   // object
let emptyValue = null;             // null
let notAssigned;                   // undefined

// Function to get type (handles array separately)
function getType(value) {
    if (Array.isArray(value)) {
        return "array";
    }
    return typeof value;
}

// Creating report rows
let report = [
    { label: "User Name",   value: userName,   type: getType(userName) },
    { label: "Age",         value: age,        type: getType(age) },
    { label: "Is Student",  value: isStudent,  type: getType(isStudent) },
    { label: "Hobbies",     value: hobbies,    type: getType(hobbies) },
    { label: "Profile",     value: profile,    type: getType(profile) },
    { label: "Empty Value", value: emptyValue, type: getType(emptyValue) },
    { label: "Not Assigned",value: notAssigned,type: getType(notAssigned) }
];

// Print formatted table
console.table(report);
