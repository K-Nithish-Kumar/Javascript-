const age = 16;

// if-else is used to make a decision based on the condition. If the condition inside the if statement satisfies true 
// it executes the first if block code. Else the else block code is executed if the condition fails inside the if. 
if(age >= 18) {
    console.log(`Your ${age} is Eligible to apply a Driving licence`);
} else {
    console.log(`You have to wait for ${18 - age} years to apply a Driving Licence`);
}