// Type conversion is used to convert the data types of the data manually

// const currentYear = '2026'
// const age = 20;
// const futureAge = currentYear + age;
// console.log(futureAge); //202620 the plus operator converts the Number type into string when the 1st value is String Datatype

// If we want to change the datatype we can manually do it
// Number() type conversion
const currentYear = '2026'
const age = 20;
const futureAge = Number(currentYear) + age;
console.log(futureAge); // 2046 Now the output is 2046 because 1st one is converted into Number Datatype


// We can also do it for String Datatype
// String()
const salary = 20000;
console.log(String(salary)); //Now the number is converted into String datatype


// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
const valueOne = '20';
const valueTwo = 10;

let sum = valueOne + valueTwo;
console.log(sum); // Output : 2010 because 1st operator is string and + operator converts the second value to string 

let subtract = valueOne - valueTwo;
console.log(subtract); // Output 10 because - operator converts the String datatype into Number

let multiply = valueOne * valueTwo;
console.log(multiply); //Output 10 because * operator converts the String datatype into Number

let divide = valueOne / valueTwo;
console.log(divide); // Output 10 because / operator converts the String datatype into Number

