/*
========================================
       JAVASCRIPT OPERATORS
          Today's Lecture
========================================
*/


// 1) ARITHMETIC OPERATORS
// Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log("Addition:", a + b);           // 13
console.log("Subtraction:", a - b);        // 7
console.log("Multiplication:", a * b);     // 30
console.log("Division:", a / b);           // 3.333...
console.log("Modulus (Remainder):", a % b); // 1
console.log("Exponentiation (Power):", a ** 2); // 100


// 2) ASSIGNMENT OPERATORS
// Used to assign or update variable values.

let x = 5;

x += 3; // x = x + 3
console.log("After +=:", x); // 8

x -= 3; // x = x - 3
console.log("After -=:", x); // 5

x *= 2; // x = x * 2
console.log("After *=:", x); // 10

x /= 2; // x = x / 2
console.log("After /=:", x); // 5


// 3) INCREMENT AND DECREMENT OPERATORS
// ++ increases the value by 1.
// -- decreases the value by 1.

let num = 5;

num++;
console.log("Increment:", num); // 6

num--;
console.log("Decrement:", num); // 5


// 4) COMPARISON OPERATORS
// Compare two values and return true or false.

console.log(5 == "5");    // true  (Loose Equality)
console.log(5 === "5");   // false (Strict Equality)

console.log(5 != 6);      // true
console.log(5 !== "5");   // true

console.log(10 > 7);      // true
console.log(10 < 8);      // false

console.log(4 >= 4);      // true
console.log(4 <= 4);      // true


// 5) PRE-INCREMENT VS POST-INCREMENT

let i = 5;

// Post-Increment: First returns value, then increments.
console.log("Post Increment:", i++); // 5
console.log("Current Value:", i);    // 6

// Pre-Increment: First increments, then returns value.
console.log("Pre Increment:", ++i);  // 7
console.log("Current Value:", i);    // 7


// 6) PRACTICAL EXAMPLE
// Calculate total price using multiplication.

const price = 50;
const qty = 20;

const total = price * qty;

console.log("Total Price:", total); // 1000


/*
========================================
          LECTURE RECAP
========================================

1. Arithmetic Operators
   +, -, , /, %, *

2. Assignment Operators
   =, +=, -=, *=, /=

3. Increment & Decrement
   ++, --

4. Comparison Operators
   ==, ===, !=, !==, >, <, >=, <=

5. Pre-Increment vs Post-Increment
   ++i vs i++

========================================
*/