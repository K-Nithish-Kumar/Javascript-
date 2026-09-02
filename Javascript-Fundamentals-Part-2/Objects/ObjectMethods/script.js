const nithish = {
    firstName: "Nithish",
    lastName: "kumar",
    birthYear: 2006,
    profession: "Full Stack Developer",
    friends: ['Haresh', 'Hari', 'Dinesh', 'Nithish', 'Sathish', 'Jeyaram', 'Akash'],
    // We can also create a function inside an object which is known as method
   /*  calcAge: function(birthYear) {
        return 2026 - birthYear;
    } */

    /* calcAge: function() {
        return 2026 - this.birthYear;
    }  */

    calcAge: function() {
        this.age = 2026 - this.birthYear;
        return this.age;
    } 
}


// If we want to access the function inside an object follow below one 
// 1.Using dot notation
console.log(nithish.calcAge());

// 2.Using bracket notation
console.log(nithish['calcAge']());

// But instead of using like above we use the value inside an object and compute the result from it. Why it is bad because if we compute answer for 5 times. Everytime the function inside gets executed for smaller code it is okay but for larger code it takes more time so we use the values inside it and pass it in a method then store the result as another variable and use that value
// Bad 
/* console.log(nithish.calcAge(2006));
console.log(nithish.calcAge(2006));
console.log(nithish.calcAge(2006));
console.log(nithish.calcAge(2006));
console.log(nithish.calcAge(2006));
console.log(nithish.calcAge(2006)); */

// Good
console.log(nithish.calcAge());
console.log(nithish.age);
console.log(nithish.age);
console.log(nithish.age);



