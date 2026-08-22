const favouriteNumber = prompt("Enter your Favourite Number: ");

// Double equal checks both the value are equal and it performs type coercion. It is also known as loose equality operator
if(favouriteNumber == 23) {
    console.log("You got it");  // You got it. '23' == 23 here the == operator performs type coercion
}

// Triple equal checks both the value are equal and it does not perform type coercion. It is also known as Strict equality operator
if(favouriteNumber === 23) {
    console.log("You got it"); 
} else {
    console.log("Oh no, It's a wrong Answer"); 
} //Output: Oh no, It's a wrong Answer because favouriteNumber is String and it checks with Number type so false.