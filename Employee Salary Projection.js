// Current salary and increment rate
let currentSalary = 45000;    // per month (example)
let incrementRate = 10;       // 10% annual increment

let yearlyData = [];

// Calculate salary for next 5 years
for (let year = 1; year <= 5; year++) {

    // Apply annual increment using assignment operator
    currentSalary += (currentSalary * incrementRate) / 100;

    // Round salary
    let roundedSalary = Math.round(currentSalary);

    // Push data into table
    yearlyData.push({
        Year: "Year " + year,
        Salary: "₹" + roundedSalary
    });
}

// Print formatted console table
console.table(yearlyData);
