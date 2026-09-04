// Syntax
/* while(condition) {
    // Block Of code
} */

let rep = 1;
while(rep <= 10) {
    console.log(`Lifting Exercise repitation ${rep} 🏋️`);
    rep++;
}

// Use while loop when you dont need any counter variables and You did not know how many iterations
// For eg:
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled number ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
