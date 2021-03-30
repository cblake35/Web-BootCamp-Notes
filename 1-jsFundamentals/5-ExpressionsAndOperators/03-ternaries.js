/* TERNARIES */
/* faster way to run conditionals, less character to run */

let x = 6;

//  a condition followed by a question mark, if conditional is truthy first condition is ran, if false then second condition is ran
x > 0 ? console.log("x is positive") : console.log("x is negative");


// examples of an if statement and a ternary operator with the same conditions and outputs the same value\

x = 12;

if (x > 10) {
    console.log("x is greater than 10");
} else if ( x < 10) {
    console.log("x is less than 10");
} else {
    console.log("x equals 10!");
}

x > 10 ? console.log("x is greater than 10") :
x < 10 ? console.log("x is less than 10") :
console.log("x equals 10!");




