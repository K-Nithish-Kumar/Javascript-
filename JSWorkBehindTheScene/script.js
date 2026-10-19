"use strict"
// Execution context and call stack
// Whenerver a js file is about to execute initially global execution context will be created.
// Every execution context has Variable Environment, Scope Chain, this keyword.

// Global execution context has variable that not declared inside any function which means globally created
// Eg:Below variables are assigned to global execution context

let numOne = 10;
let numTwo = 20;

// Here function definition is exactly stored in the global context and for every function it creates its own execution context
function add(num1 ,  num2) {
    return num1 + num2;
}

// console.log(add(numOne, numTwo));


// Scope and Scope Chain
// This is global scope
let profession = 'Coder'

function calcAge (birthYear) {
    let firstName = 'Nithish'; //outer function scope
    let age = 2026 - birthYear; //outer function scope
    

    let greet = function () {
        let experience = 3; //inner function scope
        console.log(`${firstName} is ${age} old and, He is a ${profession} with ${experience} years experience.`); //-> Here firstName, age is not in the inner function scope, looks up to the outer function scope.
        // profession is not in this inner scope looks up to the outer function scope there also not found, looks up to the global scope found it and use.
        // experience is found in inner scope.
    }

    greet();
    
}

// calcAge(2006);


// this keyword
// For regular function this keyword creates its own this and return undefined

function welcome() {
    console.log(this); //In non-strict mode it refers to global object, but in strict mode it refers to undefined.
}


// For object this refers to the object that owns or is calling the method.
const about = {
    firstName: 'Nithish',
    lastName: 'Kumar k',
    profession: 'Coder',
    age: 20,

    greet: function () {
        console.log(`${this.firstName} is ${this.age} old and, He is a ${this.profession} with ${this.experience} years experience.`);
    }

}

// about.greet();

// this refers to the objct how they call methods
const aboutMyfriend = about;
// aboutMyfriend.greet();

// Arrow functions do not have their own this keyword. Instead, they inherit this lexically from the surrounding scope where the function was defined
// For methods regular function method works because we called that method using object user.
// For arrow method it's undefined because it looks for global.name.
let name = 'Nithish' // why we use var here because it only creates a name property in global and that one is called by inner arrow method

const user = {
    name:'Nithish Kumar K',

    sayHiRegular: function () {
        console.log(`HI, ${this.name}`);
    },

    sayHiArrow: () => {
        console.log(this.name);///
    }
}

// user.sayHiArrow();
// user.sayHiRegular();

const userOne = {
    name:"Akash Kumar S",

    sayHiRegular () {
        setTimeout (function () {
            // 'this' refers to the Global/Window object, not 'user'
            console.log(`HI, ${this.name}`);
        }, 1000)
    },

    sayHiArrow () {
        setTimeout (() => {
              // 'this' is inherited from sayHiArrow(), which belongs to 'user'
            console.log(`HI, ${this.name}`);
        }, 1000)
    }
}

// userOne.sayHiRegular();
// userOne.sayHiArrow();


// Object References in practice (Shallow vs Deep Copies)
const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age:27,
}

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}
const marriedJessica = marryPerson(jessica1, 'Davis')

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age:27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = {...jessica}; //spread-operator which creates a new object in heap exactly with same properties in jessica instead of reference
jessicaCopy.lastName = 'Davis';
// console.log(jessica, jessicaCopy);

// Shallow copy - which means the copy only copied the first level primitives but it doesnot copy the family because it's a nested object so it holds the reference and copy also copies the reference
// So if we make any changes in the copy family it should be changed in the original as well
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep copy / clone - copies entire object including all nested object
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Before Clone:', jessica);
console.log('After Clone:', jessicaClone);

