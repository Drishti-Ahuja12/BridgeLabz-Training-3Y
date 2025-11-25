// Expense categories: food, travel, rent, bills, leisure
let expenses = [3000, 1200, 10000, 2500, 1500];

// Calculate total expenses
let total = 0;
for (let cost of expenses) {
    total += cost;
}

// Calculate average
let average = total / expenses.length;

// Add 10% tax using assignment operator
let finalAmount = total;
finalAmount += finalAmount * 0.10; // adding 10% tax

// Display results with rounding
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount After 10% Tax: ₹" + finalAmount.toFixed(2));
