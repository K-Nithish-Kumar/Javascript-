"use strict";

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function(obj) {
        console.log(obj);
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2, 
    starterIndex: 2,
})

// Object destructuring
// For destructuring in objects use curly braces {}
// In object destructuring we have to specify element with the exact name that how we specified in an object.
// In objects, It doesnot maintain any order so we can access it how we desire. 
const {name, openingHours, categories} = restaurant;    
console.log(name, openingHours, categories);

// Now we can accesing the objects properties by replacing names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values to avoid getting undefined
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};
({a, b} = obj);
console.log(a, b);

// Nested object destructuring
const {fri} = openingHours;
console.log(fri); // Now full object is printed.

// destructure object furtther
const {fri: {open, close}} = openingHours;
console.log(open, close);




