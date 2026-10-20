"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const rest = new Map();
// Add
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); // set method returns the updated map fully instead of this property

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// Getting values by keys
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


console.log(rest.has('categories'));    
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

// rest.set([1, 2], 'Test');
// console.log(rest);

// console.log(rest.get([1, 2])); //It gives undefined to make it work make these changes


const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']
]);

console.log(question);
console.log(Object.entries(restaurant.openingHours));

// Converting Object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));

for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

// Longer version
// if(answer === question.get('correct')) {
//     console.log(question.get(true));
// } else {
//     console.log(question.get(false));
    
// }

// Shorter version
console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);











