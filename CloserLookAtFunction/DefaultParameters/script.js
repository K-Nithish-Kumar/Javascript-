'use strict';

const bookings = [];

// In ES6 we can give the default values directly into the function parameters
// In parameters we can do a calculation also for example price = 199 * numPassengers.But
// Maily keep in mind we use that calculation before declaring the parameter it wont't work function mintains an order
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // Old way of providing default values, ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123');
createBooking('LH123', 2, 800);
// When you want to skip the argument you can't do like this in below
// createBooking('LH123', ,1000); // it gives an error

// We can do like this to handle it
createBooking('LH123', undefined, 1000);


// How Passing Arguments works: Value vs Reference

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schemadtmann',
    passport: 2451324513443,
}

// flightNum have the copy of the value instead original value when flight is passed as an argument because that's primitive type
// flightNum have the reference of the object jonas because of reference type so any changes we made through the function affects the original object
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 2451324513443) {
        alert('Check in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// Javascript does not have pass by reference it only has pass by value.
// When objects are passed to the function the memory address is passed as a value not by reference.

