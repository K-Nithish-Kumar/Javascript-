// Arrow function is a shorter version of normal function
// Syntax

// In arrow function for one line code we don't write a return keyword because it implicitely use it
// Arrow function doesnot have "this" keyword
const greet = firstName => `Hello ${firstName}`;

const nithish = greet('Nithish');
console.log(nithish);

const calculateAge = birthYear => 2026 - birthYear;
const age4 = calculateAge(2006);
console.log(age4);


const yearsUntilRetirement = (birthYear, firstName) => {
    const ageCalculate = 2026 - birthYear;
    const retirement = 65 - ageCalculate;
    return `${firstName} retires in ${retirement} years`;
}

const nithishRetirement = yearsUntilRetirement(2006, 'Nithish');
const hareshRetirement = yearsUntilRetirement(2004, 'Haresh');

console.log(nithishRetirement);
console.log(hareshRetirement);

