/**
 * Variable Declarations
 */

const age = 30;
const birthYear = 1994;
let name = "John Doe";
const isStudent = true;

//age = 31; // This will cause an error because age is a constant

name = "Jane Doe"; // This is valid because name is declared with let

//birthYear = 1995; // This will cause an error because birthYear is a constant

//isStudent = false; // This will cause an error because isStudent is a constant

console.log(age, birthYear, name, isStudent);

/**
 * Arithmetic Operations and Type Coercion
 */

let num = 21;
let strNum = "10";
let addtionValue = num + strNum; // z will be '2110' because of type coercion
console.log(addtionValue); // Output: '2110'

let subtractionValue = num - strNum; // t will be 11 because y is coerced to a number
console.log(subtractionValue); // Output: 11

let multiply = strNum * "2"; // m will be 20 because both strings are coerced to numbers
console.log(multiply); // Output: 20

let divide = strNum / "2"; // d will be 5 because both strings are coerced to numbers
console.log(divide); // Output: 5
