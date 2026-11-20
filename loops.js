// 1. Introduction to Loops
// Loops repeat a block of code while a condition is true, avoiding repetitive code.
console.log("--- 1. Introduction to Loops ---");
console.log("Counting 1 to 3 without a loop: 1, 2, 3");

// 2. For Loop
// Best when you know how many times you want to repeat.
console.log("\n--- 2. For Loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// 3. While Loop
// Runs as long as the condition remains true (checked before each iteration).
console.log("\n--- 3. While Loop ---");
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// 4. Do While Loop
// Executes the code block at least once before checking the condition.
console.log("\n--- 4. Do While Loop ---");
let num = 5;
do {
  console.log("Do-While runs at least once. num =", num);
  num++;
} while (num < 5);

// 5. Nested Loops
// A loop inside another loop (often used for grids, tables, or patterns).
console.log("\n--- 5. Nested Loops (Multiplication Table 1 to 3) ---");
for (let row = 1; row <= 3; row++) {
  let rowOutput = "";
  for (let col = 1; col <= 3; col++) {
    rowOutput += `${row}x${col}=${row * col}\t`;
  }
  console.log(rowOutput);
}

// 6. Star Pattern Programming
// Using nested loops to build right-angled triangle stars.
console.log("\n--- 6. Star Pattern Programming ---");
let rows = 4;
for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars.trim());
}
