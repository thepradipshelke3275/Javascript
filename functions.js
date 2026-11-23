// 1. Function Declaration & Parameters
// Syntax:
// function functionName(param1, param2) {
//   // code to execute
// }

function greet(name) {
  console.log("Hello world " + name);
}
greet("John");

// 2. Return Statement
function add(a, b) {
  return a + b;
}
console.log("Add (2, 3):", add(2, 3));
console.log("Add (20, 30):", add(20, 30));

// 3. Practical Example: Bill Calculation
// Note: 'dis' is accepted as a parameter—try extending this to apply a discount!
function totalBill(price, qty, dis = 0) {
  let subtotal = price * qty;
  let discountAmount = (subtotal * dis) / 100;
  return subtotal - discountAmount;
}
let bill = totalBill(50, 3, 10);
console.log("Total bill (after 10% discount):", bill);

// 4. Function Hoisting
// Function declarations can be called before they are defined in the file.
console.log("Hoisted call:", hi());
function hi() {
  return "Hi from hoisted function!";
}

// 5. Normal Function vs. Arrow Function
// Normal function:
function normalAdd(a, b) {
  return a + b;
}

// Arrow function (concise implicit return for single expressions):
const addition = (a, b) => a + b;
console.log("Arrow addition (10, 2):", addition(10, 2));

// 6. Callback Functions
// Passing a function as an argument to be executed inside another function.
function greetWithCallback(name, cb) {
  console.log("Hello " + name);
  cb();
}

greetWithCallback("abc", function () {
  console.log("It's a callback!");
});

// 7. Default Parameters
// Fallback value is used if an argument is not passed (or is undefined).
function addWithDefault(a, b = 10) {
  return a + b;
}
console.log("Default param (50, 30):", addWithDefault(50, 30)); // 80
console.log("Default param (20):", addWithDefault(20));         // 30 (b defaults to 10)