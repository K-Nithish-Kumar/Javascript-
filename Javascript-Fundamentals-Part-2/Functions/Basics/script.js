// Function is a set of code or chunk of code used by calling, invoking , or running function instead of writing same
// code over again and again

function logger() {
    console.log('My name is NITHISH KUMAR K');
}


// Calling, invoking, running function 
logger();
logger();
console.log(logger()); //My name is NITHISH KUMAR K and undefined because it doesnot return anything;

function juiceProcessor(noOfApples, noOfOranges) {
    const juice = `Juice made with ${noOfApples} apples and ${noOfOranges} oranges`;
    return juice;
}

juiceProcessor(5,0)

console.log(juiceProcessor(5,0));

const appleJuice = juiceProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = juiceProcessor(5, 5);
console.log(appleOrangeJuice);

// Other Built-in Functions 
console.log();
Number();
String();
