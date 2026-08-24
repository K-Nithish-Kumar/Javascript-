
// Function Declaration
const age3 = calculateAge1(2006);
console.log(age3);

function calculateAge1(birthYear) {
    return 2026 - birthYear; 
}

const age1 = calculateAge1(2006);
console.log(age1);

// The main difference between function declaration and expressions is in declaration we can access the function before initialize it but we can't do this with function expression.

// Function Expression

/* const age4 = calculateAge2(2006);
console.log(age4);  */ // script.js:17 Uncaught ReferenceError: Cannot access 'calculateAge2' before initialization

const calculateAge2 = function (birthYear) {
    return 2026 - birthYear;
}

const age2 = calculateAge2(2006);
console.log(age2);