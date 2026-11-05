
// JavaScript Day 04 - Data Types

// 1. PRIMITIVE DATA TYPES

// String
const firstName = "John";
const lastName = 'Doe';
const animal = `Tiger`;

console.log("STRING:");
console.log(firstName, lastName, animal);
console.log(typeof firstName); // string

// Number
const age = 25;
const price = 90.50;
const temperature = -5;

console.log("\nNUMBER:");
console.log(age, price, temperature);
console.log(typeof temperature); // number

// Boolean
const isLoggedIn = true;
const hasPermission = false;

console.log("\nBOOLEAN:");
console.log(isLoggedIn, hasPermission);
console.log(typeof hasPermission); // boolean

// Undefined
let userAge;

console.log("\nUNDEFINED:");
console.log(userAge);        // undefined
console.log(typeof userAge); // undefined

// Null
const selectedUser = null;

console.log("\nNULL:");
console.log(selectedUser);        // null
console.log(typeof selectedUser); // object (historical quirk)

// BigInt
const bigNumber = 134345465776767n;

console.log("\nBIGINT:");
console.log(bigNumber);
console.log(typeof bigNumber); // bigint

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log("\nSYMBOL:");
console.log(id1 === id2); // false
console.log(typeof id1);  // symbol


// 2. NON-PRIMITIVE DATA TYPES

// Array
const fruits = ["Apple", "Mango", "Banana"];

console.log("\nARRAY:");
console.log(fruits);
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// Object
const student = {
    name: "John",
    age: 25,
    city: "Pune"
};

console.log("\nOBJECT:");
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(typeof student); // object

// Function
function greet() {
    console.log("Hello Friends");
}

console.log("\nFUNCTION:");
greet();
greet();
greet();

console.log(typeof greet); // function


// 3. TYPE CHECK REVISION

console.log("\nTYPE CHECK REVISION:");

console.log(typeof "Hello");   // string
console.log(typeof 25);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (historical quirk)
console.log(typeof 10n);       // bigint
console.log(typeof Symbol());  // symbol
console.log(typeof []);        // object
console.log(typeof {});        // object
console.log(typeof greet);     // function


// QUICK REVISION:
// Primitive: String, Number, Boolean,
// Undefined, Null, BigInt, Symbol
//
// Non-primitive examples:
// Array, Object, Function
//
// Use Array.isArray() to check an array.
