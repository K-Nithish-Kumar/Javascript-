// Loops are keep running the repetative task untile the condition gets False

// For eg IF you are going to gym and do a repititative task on lifting exercise for 10 times. Instead of logging it console by hardcoding using for loop to do this task based on our requirements
/*console.log('Lifting Exercise Repetation 1 🏋️');
console.log('Lifting Exercise Repetation 2 🏋️');
console.log('Lifting Exercise Repetation 3 🏋️');
console.log('Lifting Exercise Repetation 4 🏋️');
console.log('Lifting Exercise Repetation 5 🏋️');
console.log('Lifting Exercise Repetation 6 🏋️');
console.log('Lifting Exercise Repetation 7 🏋️');
console.log('Lifting Exercise Repetation 8 🏋️');
console.log('Lifting Exercise Repetation 9 🏋️');
console.log('Lifting Exercise Repetation 10 🏋️'); */

// For loop Syntax
/* for(variable initialization; condition; increment/decrement) {
    // Block of code
} */

// If we want to do the repetation for 30 time or more just altering the condition is enough
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting Exercise Repetation ${rep} 🏋️`)
}


// Accessing Array elements
const nithish = ['Nithish', 'Kumar', 20, 'Full Stack Developer', ['Nithish', 'Haresh', 'Dinesh']];
const types = [];

for(let i = 0; i < nithish.length; i++) {
    // Iterate through an array and logged it to the console
    console.log(nithish[i], typeof nithish[i]);

    // We can also create or add an array elements 
    // For eg if we want to add the typeof nithish[i] to the array types just follow the below one
    // types[i] = typeof nithish[i]; // -> Approach - 1
    types.push(typeof nithish[i]); // -> Approach - 2 
}

console.log(types);


// Continue and Break
// Continue skip the current iteration if the condition satisfies true and move to the next iteration 
// Break terminates the whole for loop once the condition satisfies true

// Continue
for(let i = 0; i < types.length; i++) {
    if(typeof nithish[i] !== 'string') continue;

    console.log(nithish[i], typeof nithish[i]);
}
for(let i = 0; i < types.length; i++) {
    if(typeof nithish[i] == 'number') break;

    console.log(nithish[i], typeof nithish[i]);
}

// Accessing array elements from reverse 
for(let i = nithish.length - 1; i >= 0; i--) {
    console.log(i, nithish[i]);
}

// Nested for loops
// For Eg: You are going to the gym and you have to workout 3 exercise for 5 repetitation of each. 
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Exercise: ${exercise}`);
    for(let rep = 1; rep <= 5; rep++) {
        console.log(` Exercise: ${exercise} Lifting Exercise Repetation ${rep} 🏋️`)
    }
}
