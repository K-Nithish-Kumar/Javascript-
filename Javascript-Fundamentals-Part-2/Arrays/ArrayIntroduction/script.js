// Without Array For eg : if we want to store our friends name we should use separate varibles like below

const friend1 = 'Haresh'
const friend2 = 'Nithish';
const friend3 = 'Dinesh';
const friend4 = 'Hari';

// But above one is okay for smaller friends if we want to store 1000 friends we need thousand variables so instead of storing it in a separate variable we use an array data structure

// Array Syntax:
// Way - 1
const friends = ['Haresh', 'Nithish', 'Dinesh', 'Hari'];
console.log(friends);

// Way - 2
const nithishFriends = new Array('Haresh', 'Nithish', 'Dinesh', 'Hari');
console.log(nithishFriends);


// Finding Array length
console.log(friends.length); // 4 

// Accessing array elements
// We access an array elements using index
// Array index starts from 0
console.log(friends[0]); // Haresh
console.log(friends[1]); // Nithish

// If i want to access the last element. For smaller array we can access it using the index
console.log(friends[3]); // Hari

// But if the array contains 1000+ values we can access the last element using array.length - 1
console.log(friends[friends.length - 1]);

// We can also change the array values by accesing the index only
friends[3] = 'Sathish';
console.log(friends);

// Array values could be an expression
const lastName = 'Kumar K'
const aboutNithish = ['Nithish', lastName, 2026 - 2006, friends];
console.log(aboutNithish);


