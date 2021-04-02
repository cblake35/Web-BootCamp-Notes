// Conditional Statements - if, if else/else if, switch, ternary

//IF STATEMENTS
//Checks for a boolean value, if something is true it is truthy(a truthy statement), or falsy
// Truthy - if condition is true
// Falsy - if condition is false
// Some falsy expressions are: null, NaN(not a number), 0, an empty string(""), undefined

// if a condition is true, then JS will execute(perform) the code block
// if checks one, singular, condition

// for example
let isOpen = true;

// strictly written
if(isOpen === true) {
    console.log("The door is open.")
}

// same as above
if(isOpen) {
    console.log("The door is open.");
}

// IF ELSE 
// If else is used to check a condition, but run a code block for either the met condition or 
// a separate code block if it does not meet the condition

let isOpen = false;

if (isOpen) {
    console.log("Door is open");
} else {
    console.log("The door is shut.");
}

// ELSE IF
// Else if is used to allow us to check for more than 2 conditions

let temp = 63;

if (temp >= 80) {
    console.log("Whew its finally getting hot!");
} else if(temp >= 65) {
    console.log("What a nice day.");
} else {
    console.log("It's too cold for me, I'm moving back to Texas!");
}

// SWITCH STATEMENTS
// They execute a block of code depending on the "cases"; conditions met? check against cases
// use case (condition):
// break - to end the code 
// default - code to be ran if no cases are met, good practices to have

let favColor = "green";

switch(favColor){
    case "blue":
        console.log("Blue like the sky");
        break;
    case "red":
        console.log("Red like a rose");
        break;
    default: 
        console.log(`${favColor} is beautiful too`);
}

// can also have multiple cases 

let doYouLikePizza = "yes";

switch(doYouLikePizza) {
    case "yeah":
    case "yep":
    case "duh":
        console.log("Of course I love pizza!");
        break;
    case "no":
    case "nope":
        console.log("eww, not pizza");
        break;
    default: 
        console.log("I cannot tell if thats a yes or no")
}

// TERNARY
// concise way to check two(or more) conditions using the syntax of ? and :
// Structure:
// (condition) ? (code to run if Truthy) : (code to run if falsy);


// Fizzbuzz challenge using ternary operator

for (let i = 0; i <= 100; i++){
    i % 15 === 0 ? console.log("Fizz Buzz") : 
    i % 3 === 0 ? console.log("Fizz") : 
    i % 5 === 0 ? console.log("Buzz") : 
    console.log(i);
}

// LOOPS
// for loop - a quick way to iterate or loop over something
// infinite loops are possible(best to avoid): cmnd + c or close  vs code when they are created
// Loops take in 3 parameters, each separated by a semicolon
// initial expression; condition; increment(decrement) expression

for (let i = 0; i<=10; i++) {
    console.log(i);
}

// Challenge: use a for loop to count to 20, but by 2's

for (let i = 0; i<=20; i+=2){
    console.log(i);
}

// Printing each letter with a loop

let word = "Fantastic";

for  (let i = 0; i<word.length; i++){
    console.log(word[i]) // word[i] gets the value of the letter in a specifix index position
}