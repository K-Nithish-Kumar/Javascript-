"use strict"

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
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
    },

    orderPizza: function(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
        
    }
};

// 1) Destructuring
// SPREAD because on RIGHTSIDE of =
const arr = [1, 2, ...[3, 4]]

// REST because on LEFTSIDE of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a,  b, others);

// Rest pattern should be always defined in last
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// 2.)Functions
const add = function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 2, 2, 5, 4, 3);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olive')
restaurant.orderPizza('chicken');

