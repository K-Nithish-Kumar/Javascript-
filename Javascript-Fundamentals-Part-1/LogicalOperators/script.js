const hasDrivingLicence = true;
const hasGoodVision = true;

// && operator returns true if both the condition satisfies true
console.log(hasDrivingLicence && hasGoodVision); // true because both the variable holds the true value

// || operator returns true if any one of the condition satisfies true
console.log(hasDrivingLicence || hasGoodVision); // true

// ! operator returns the opposite boolean result of the condition
// It has higher precedence than other
console.log(!hasDrivingLicence); //false

if(hasDrivingLicence && hasGoodVision) { //true 
    console.log("Haresh is able to drive the car");
} else {
    console.log("Someone have to drive it...");
}