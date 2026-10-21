'use strict';

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ])

// const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2)); //extract starts at the end and continue till the last because we did not pass the end argumaent
console.log(arr.slice(2, 4)); // index 4 is excludes as in the string
console.log(arr.slice(-2)); // extracting last elements
console.log(arr.slice(1, -1));
// Shallow copy of array
console.log(arr.slice());
console.log([...arr]);

// splice methods - it make changes in the original array
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); // here parameter 1 is starting index, and paramter 2 is how many elements need to be deleted


console.log(arr); // ['a', 'b'] remaining elements are extracted from the original array using splice

// Reverse 
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //this one changes the original array.

// Concat 
const letters = arr.concat(arr2);
console.log(letters); // doesnot change the array 
console.log([...arr, ...arr2]);

// Join
console.log(letters.join('-')); // result is string

// At method
const arrOne = [23, 11, 64];
console.log(arrOne[0]);
console.log(arrOne.at(0));
console.log(arrOne[-1]); // it gives undefined
console.log(arrOne[arrOne.length-1]);
console.log(arrOne.slice(-1)[0]); // taking element out from an array

console.log(arrOne.at(-1));


// looping arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
for(const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`${i + 1} You deposited ${movement}`);
    } else {
        console.log(`${i + 1} You withdrew ${Math.abs(movement)}`);
        
    }
}

console.log('----FOREACH----');

// In forEach method if we want to get the index number we can do it by declaring as the second parameter and 3rd one is entire array
// It doesnot have continue and break;
movements.forEach(function(movement, i) {
    if(movement > 0) {
        console.log(`${i + 1} You deposited ${movement}`);
    } else {
        console.log(`${i + 1} You withdrew ${Math.abs(movement)}`);
        
    }
})

// forEach with maps and sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
])

// Map 
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
} )

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
    
})















