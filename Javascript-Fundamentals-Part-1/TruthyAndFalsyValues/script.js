// 5 Falsy values 0, '', undefined, NaN, null
// Falsy value is when we try to convert a value into boolean it will encounter the above 5 values and it is known as falsy values initially it's true after conversion it's false so it is known as falsy values

const money = 0;
if(money) {
    console.log("Don't spend much money for it");
} else {
    console.log("You should have to get a job");
} // Output: You should have to get a job because money variable contains 0 and its false in if condition so, Else block console is executed.

const salary = 1000;

if(salary) {
    console.log("Don't spend much money for it");
} else {
    console.log("You should have to get a job");
} // Output is Don't spend much money for it. Because here money is some value and if condition tries to convert the value into boolean value and it does not fall under those falsy values so if block statement is executed 

