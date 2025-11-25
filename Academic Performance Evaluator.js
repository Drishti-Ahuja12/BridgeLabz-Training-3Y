// Marks of 5 subjects stored in an array
let marks = [85, 91, 78, 88, 92];  // You can change these values

// Validation: If any subject < 35 → Detained
let detained = false;
for (let m of marks) {
    if (m < 35) {
        detained = true;
        break;
    }
}

// Calculate total and average
let total = 0;
for (let m of marks) {
    total += m;
}

let average = total / marks.length;
let percentage = average; // average is same as percentage (out of 100)

// Final decision logic
let result;

if (detained) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

// Output
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Final Result:", result);
