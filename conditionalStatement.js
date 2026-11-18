// JavaScript Lecture: Conditional Statements

// 1. IF-ELSE STATEMENT
const age = 15;

if (age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible");
}

// 2. TERNARY OPERATOR
const voterAge = 20;

const votingResult = voterAge >= 18
    ? "Eligible for vote"
    : "Not Eligible";

console.log(votingResult);

// 3. IF-ELSE-IF LADDER
const marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 4. SWITCH-CASE: TRAFFIC SIGNAL
const signal = "Yellow";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// 5. EVEN OR ODD
const number = 7;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 6. POSITIVE, NEGATIVE OR ZERO
const checkNumber = -5;

if (checkNumber > 0) {
    console.log("Positive Number");
} else if (checkNumber < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// 7. STUDENT GRADING SYSTEM
const studentMarks = 92;

if (studentMarks < 0 || studentMarks > 100) {
    console.log("Invalid Marks");
} else if (studentMarks >= 90) {
    console.log("Grade A");
} else if (studentMarks >= 75) {
    console.log("Grade B");
} else if (studentMarks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 8. SIMPLE CALCULATOR USING SWITCH
const firstNumber = 20;
const secondNumber = 5;
const operator = "*";

switch (operator) {
    case "+":
        console.log("Result:", firstNumber + secondNumber);
        break;
    case "-":
        console.log("Result:", firstNumber - secondNumber);
        break;
    case "*":
        console.log("Result:", firstNumber * secondNumber);
        break;
    case "/":
        if (secondNumber === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log("Result:", firstNumber / secondNumber);
        }
        break;
    default:
        console.log("Invalid Operator");
}

// 9. DAY OF THE WEEK
const dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day Number");
}