const friends = ['Haresh', 'Nithish', 'Dinesh', 'Hari'];

// To add Elements there are two Built-in function in Javascript which is "PUSH", "UNSHIFT"
// Push method is used to add the element at the end of the array
// Push method returns length of the new array.
const newLengthOfFriendsArray = (friends.push('Sathish'));
console.log(friends);
console.log(newLengthOfFriendsArray);

// Shift method is used to add the element at the beginning and it also return the new length of the array after adding the element in an array
const newArrayLength = (friends.unshift('Akash'));
console.log(friends);
console.log(newArrayLength);

//There are two methods to remove elements from an array
// 1. POP - Removes the last element from an array
//          It returns the removed element
const removeLastElement = friends.pop();
console.log(friends);
console.log(removeLastElement);

// 2.SHIFT - Remove the first element from an array
//           It also return the removed element
const removeFirstElement = friends.shift();
console.log(friends);
console.log(removeFirstElement);

// To find the index of the Value in an array use indexOf method
console.log(friends.indexOf('Haresh'));

// includes method is available in JS which returns true if the value in an array else return false
// It uses strict equality so type coercion doesnot happen
console.log(friends.includes('Dinesh'));

// There is one use of using includes which is we can use it in a 'if' confitiion checking.
if(friends.includes('Nithish')) {
    console.log('You have friend called Nithish');
}


