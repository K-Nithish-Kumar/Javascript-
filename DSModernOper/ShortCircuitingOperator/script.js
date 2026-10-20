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

// Use Any data type, return any data type,
// Short-circuiting
// Short-circuiting OR looks for first truthy values if first value is true and returns it immediately before checking the second one 
console.log('----OR----');

console.log(3 || 'Jonas');
console.log(true || 0);
console.log(undefined || false || '' || 0 || 'Hello' || null || 3);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10; //here we have to print 0 but it prints 10 because that 0 is falsy value.
// If restaurant.numGuests is not defined which is undefined so 10 is printed
console.log(guest2);

// Now we see the concept of nullish collescing
// For nullish collescing: null and undefined are falsy values not 0 OR ''
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('----AND----');
console.log(0 && 'Jonas'); // It's opposite to the OR, this looks for the first falsy values and return falsy values immediately without looking the others
console.log(7 && 'Nithish');

if(restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')






