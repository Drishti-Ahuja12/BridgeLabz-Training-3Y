// Input: total purchase amount
let totalPurchase = 7800;  // you can change this value

let discountPercent = 0;

// Determine discount tier
if (totalPurchase >= 10000) {
    discountPercent = 25;
} else if (totalPurchase >= 5000) {
    discountPercent = 15;
} else if (totalPurchase >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Calculate discount amount and final price
let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;

// Output (rounded)
console.log("Original Total: ₹" + Math.round(totalPurchase));
console.log("Discount Percentage: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + Math.round(finalPrice));
