"use strict";

//3. Enhancement 3 which is before ES6 we should not compute the property name but after ES6 we can
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// For eg in below object we compute the property name using the above array
const openingHours = {
        [weekDays[3]]: {
            open: 12,
            close: 22,
        },
        [weekDays[4]]: {
            open: 11,
            close: 23,
        },
        [weekDays[5]]: {
            open: 0,
            close: 24,
        },
};


// The all inside the {} is an object literal
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // Now we want the same openingHours object in this object
    // Before ES6
    // openingHours: openingHours, // it doesnot create any problem but the both property and value is same so it get confusion
    
    // 1. Enhancement One
    // To avoid the below one ES6 introduced enhanced object literal
    openingHours,
    
    // 2. Enhancement 2 is before enhancement we should create method like below
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // After enhancement we can remove the colon and function keyword
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },


    orderDelivery: function(obj) {
        console.log(obj);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
    },
    orderPizza: function(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
        
    }
};