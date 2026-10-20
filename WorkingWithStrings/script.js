'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';


// Part - 1
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('Nithish'[0]);

console.log(airline.length);


// Methods
// This looks for the first occurance from the left to right
console.log(airline.indexOf('r'));

// If we need it from the last use below method
console.log(airline.lastIndexOf('r'));

// This is case sensitive
console.log(airline.indexOf('Portugal'));

// that argument is starting index
console.log(airline.slice(4));
// In string last index excluded in this function
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are the middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') 
        console.log('You got the middle seat');
    else
         console.log('You got lucky');
        

}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


// Part - 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Nithish'.toUpperCase());

// Fix Captilization name
const passenger = 'nItHiSh';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@nithish.io';
const loginEmail = ' Hello@Nithish.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing parts of string
const priceIN = '88,000rup';
const priceUS = priceIN.replace('rup', '$').replace(',' , '.');
console.log(priceUS);

const announcement = 'All passengers come to borading door to 23. Boarding door 23';

console.log(announcement.replaceAll('door', 'gate'));

// By using regulare explanation /g is a global
console.log(announcement.replace(/door/g,  'gate'));

// Booleans
const planeOne = 'Airbus A320neo';
console.log(planeOne.includes('A320'));
console.log(planeOne.includes('Boeing'));
console.log(planeOne.startsWith('Air'));

if(planeOne.startsWith('Airbus') && planeOne.endsWith('neo')) {
    console.log('Part of the new Air bus family');
    
}

// Practice Exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on Board');
    } else {
        console.log('Welcome on board');
    }
}

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Part - 3
// Split
console.log('a+very+nice+string'.split('+'));
// console.log('Nithish Kumar'.split(' '));

const [firstName, lastName] = 'Nithish Kumar'.split(' ');
// console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const captilizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }

    console.log(namesUpper.join(' '));
    
}

captilizeName('jessica ann smith davis');
captilizeName('nithish kumar');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));


const maskCreditCard =  function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(78868767565657656));
console.log(maskCreditCard('241432313231234123'));

// Repeat 
const messageTwo = 'Bad Weather... All Departures Delayed... ';
console.log(messageTwo.repeat(5));

 

























