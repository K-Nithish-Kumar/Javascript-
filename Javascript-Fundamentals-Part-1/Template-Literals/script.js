const userName = 'Nithish';
const profession = 'Web Developer';
const birthYear = 2006;
const year = 2026;

// Before ES6 we concatenate strings with the help of + sign
console.log("I'm " + userName + ' a ' + (year - birthYear) + ' years old ' + profession);

// The above concatenation is hard for many strings so in ES6 the new feature is introduced which is String literal
console.log(`I'm ${userName} a ${year - birthYear} years old ${profession}`);

// Before ES6 for new line in string concatenation we should use \n
console.log("Multiple \n\
String \n\
Lines");

// But after ES6 the string literal handle it perfectly
console.log(`Multiple
String
Lines`);