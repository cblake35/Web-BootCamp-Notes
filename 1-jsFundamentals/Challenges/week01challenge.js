// Create two variables and log into the console log the total length of letters
var myName = "Chris Blake";
var friendName = "Bob Ross";

console.log(myName.length);
console.log(friendName.length);

// Find the difference of the letters from the variables declared above and log them into the console using 
// a string and a complete sentence.
// example result "My name is greater than Bob Ross by 3."

var nameOne = myName.length;
var nameTwo = friendName.length;
var nameDiff = nameOne-nameTwo;

if (nameOne > nameTwo) {
    console.log("My name is greater than " + friendName + " by " + Math.abs(nameDiff) + ".");
} else if (nameTwo > nameOne) {
    console.log("My friends name is greater than mine by " + Math.abs(nameDiff) + ".");
} else {
    console.log("Our names have the same length!");
}


// Platinum if statement challenge

var age = 17;

if ( age <= 17) {
    console.log(`You're too young to do anything, stay at your parent's.`);
} else if (age < 19) {
    console.log(`You can vote!`);
} else if (age < 22) {
    console.log(`Please, just not one of those White Claw Things!`);
} else if (age < 26) {
    console.log(`Your insurance premium just went down.`);
} else {
    console.log(`You're getting old!`);
}
