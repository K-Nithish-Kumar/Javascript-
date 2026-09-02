const nithish = {
    firstName: "Nithish",
    lastName: "kumar",
    age: 2026 - 2006,
    profession: "Full Stack Developer",
    friends: ['Haresh', 'Hari', 'Dinesh', 'Nithish', 'Sathish', 'Jeyaram', 'Akash']
}

console.log(nithish);

// Accessing elements using dot operator
// Dot operator allows us to only using the value present in the object
console.log(nithish.firstName);


// Bracket operator is used because we can use expression inside it
console.log(nithish['firstName']);

const nameKey = 'Name';
// If we want to add the expression we can do it
console.log(nithish['first' + nameKey]); // here first the expression inside the bracket is computed first and then return a value and it find it in an object. If found it returns the value

const interestedIn = prompt('What do you know about Nithish? Just enter between firstName, lastName, age, profession, friends');

// If we use dot operator. It searches the key is inside an object or not. If found returns the value else return undefined
if(nithish.interestedIn) {
    console.log(nithish.interestedIn);
} else {
    console.log('Wrong request');
}

// but using bracket operator it first execute the expression and compute the value and search it in an object and then return the answer
if(nithish[interestedIn]) {
    console.log(nithish[interestedIn]);
} else {
    console.log('Wrong request');
}


// Adding new values in an object using dot notation
nithish.experience = '0 - 2years';
console.log(nithish);

// Adding new values in an object using bracket notation
nithish['dob'] = '13-04-2006';
console.log(nithish);

