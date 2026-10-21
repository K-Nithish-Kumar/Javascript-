'use strict';

// First class function means that functions are simply values
// Eg: Below function is stored as a value. This is known as first class function
const add = function(num1, num2) {
    return num1 + num2;
}

// Higher Order function is nothing but it receives other functions as an argumentor return other function or both.
// Eg: Here addEventListerner calls the add function as an argument
document.body.addEventListener('click', add);

// Higher Order Function
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const[first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
    
}

transformer('JavaScript is the best!', upperFirstWord); 
transformer('JavaScript is the best!', oneWord); 

// Function Returning Function
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

// Here greet function return another function and we stored it with another variable greeterHey Then we called it that variable with name
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steeven');

// We can also do like this
greet('Hey')('Nithish');

// Arrow function
const greetOne = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
} 

greetOne('Hi')('Nithish Kumar');

//
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum},`, name});
    }
};

lufthansa.book(239, 'Nithish Kumar');
lufthansa.book(635, 'Akash Kumar');
console.log(lufthansa);

const eurowings = {
    airline:'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

// Here we assign the method to a variable book and now it's a regular function 
// If we try to call the below function it gives an error because we know thet regular function gives undefined at least in strict mode
const book = lufthansa.book;
// book(23, 'Haresh Babu');

// So to handle that error call and apply method is used
// Call method which manually and explicitely set the this keyword to point which object we need.
// For eg: In below 1st argument is the object that we need to pointed by this keyword
book.call(lufthansa, 234, 'Jeffrin');
console.log(lufthansa);

book.call(eurowings, 245, 'Sathishwaran');
console.log(eurowings);

// Apply method which doesnot receive list of arguments instead it accepts the array
const passengerOne = [234, 'Hari Raajan'];
book.apply(eurowings, passengerOne);
console.log(eurowings);

// But in modern javascript we avoid using apply instead we use call method and unpacking the array elements and pass it into function by spread operator
book.call(lufthansa, ...passengerOne);
console.log(lufthansa);

// Bind Method
// It binds the book method to lufthansa which means that we are setting the this keyword to lufthansa object
// By this we once set the this keyword is enough instead of setting everytime we book by call method
const bookLh = book.bind(lufthansa);
const bookEw = book.bind(eurowings);
bookLh(233, 'Maharaja Dinesh');

// Using bind we can also create a new function for specific booking only.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Samy Saran');
bookEW23('Martha Cooper');


// With eventlisteners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
    
}

// In dom the this keyword set to the html element where it's is attachedd so the callback function return the button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// So we handle it by binding the this to lufthansa object by bind method
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// in bind parameters 1st parameter is provided to null because there is no this keyword used in the above function
const addVAT = addTax.bind(null, 0.23,);
console.log(addVAT(100));

const addTaxOne = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

console.log(addTaxOne(0.1)(200));

// Immediately invoked function expression
// Sometimes we need to execute function only once
const runOnce = function () {
    console.log('This will never run again');
};

runOnce(); // But with the above function we can call it how many times we want

// But we need to execute function only once
// That is Immediately invoked function expression
// Syntax.
(function() {
    console.log('This will never run again');
    
})();

(() => console.log('This will never run again'))();

(() => {
    console.log('This ALSO never will run again');
})();


// Closure
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount}: passengers`)
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// More closure examples

// Example 1
let f;
const g = function () {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();

// Reassigning f function
h();
f();


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
        
    }, wait * 1000);


    console.log(`Will start baording in ${wait} seconds`);
    
} 

boardPassengers(180, 3);








