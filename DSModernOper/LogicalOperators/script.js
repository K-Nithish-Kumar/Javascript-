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

const rest1 = {
    name: 'Capri',
    numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Rossi',
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical OR assignment operator
// But this both will produce same 10 even if the numGuests is 0
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Logical nullish colescing assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// Logical AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1, rest2);
