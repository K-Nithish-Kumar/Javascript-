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

console.log(new Set('Nithish'));
// Set stores only unique values and it removes the duplicate value
// Sets are also iterable
// Order of set is relevant
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
// In sets if we try to get through an index it returns undefined
// console.log(ordersSet[0]);

for (const order of ordersSet) {
    console.log(order);
    
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// New Operations to make set useful after updates from ES2025
const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
])

// intersection method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log('Intersection:',[...commonFoods]);


// Union Method - it will print all the dishes in both set without duplicates
const italianAndMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianAndMexicanFusion);

// But spread operator allows duplicates
console.log([...italianFoods, ...mexicanFoods]);

// But we can remove duplicated again using set
console.log([new Set([...italianFoods, ...mexicanFoods])]);

// Difference method - gives all the unique elements in the first set
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log('Difference Italian:', uniqueItalian);

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexican);

// Symetric Difference - It gives both side datas except intrsection part.
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);







