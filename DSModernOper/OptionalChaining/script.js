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
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
    },
    orderPizza: function(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
        
    }
};

if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// if(restaurant.openingHours.fri)
// console.log(restaurant.openingHours.fri.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open  ?? 'closed'; //Here for sat also printed closed if we use || so we used ?? 
    console.log(`On ${day}, we open at ${open}`);
    
}

// Optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Optional Chaining on Arrays
const users = [
    {
        name: 'Nithish',
        email: 'hello123z@gmail.com'
    }
];

console.log(users[0]?.name ?? 'User Array Empty');

// Without optional chaining
if(users.length > 0) {
    console.log(users[0].name);
} else {
    console.log('user array empty');
    
}




