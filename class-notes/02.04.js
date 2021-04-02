// Day 4: Functions, Scope, Hoisting, Literals

// Literals

let butlerMascot = "Bulldog"; //literals represents value that have been hardcoded(string literal)
let myAge = 30; //number literal
let arr = []; //this value is not hardcoded


// Hoisting

/* Genral way of thinking about how code creation and execution works in JS

-JS puts variagle declaration and function declarations into memory during the compile phase
of the code*/

// this will not work since variable havent been declared before console.log was called
// this will result in an error
console.log(myName);
var myName = "Chris"; //var is function scoped

// this will result in an undefined
console.log(myPet);
let myPet = "Ghost"; //let is block scoped


sayHello();
function sayHello() {
    console.log(`This is a function declaration`); //function declaration is hoisted
}


let func = function() {
    console.log(`This is a function expression`); //function expressions is NOT hoisted
}

//Scope
// Hierarchy of variable in our code - commonly referred to as global scope, local scope, parent scope, and child scope


let coffee = `Ethiopia`; //global scope

function example() {
    let x = `Local scope - decalred inside function` //function scope
    console.log(coffee);
}

example();

console.log(x); //this will return an error because the x is not defined out of the function scope
                // therefore not accessible globaly


// Global scope can be accessed by local function scope
// Local scope cannot be accessed by global scope


/* Functions */

//block of code designed to perform a particular taskrr