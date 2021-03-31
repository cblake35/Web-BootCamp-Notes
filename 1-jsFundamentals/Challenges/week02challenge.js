//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that: 
//* Prints out "Fizz" if the number is divisible by 3
//* Prints out "Buzz" if the number is divisible by 5
//* Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//* Bronze: Write as a If else
//* Silver: Write as a Switch,
//* Gold: Write as a Ternary



// Gold
for (let i = 0; i <= 100; i++){
    i % 15 === 0 ? console.log("Fizz Buzz") : 
    i % 3 === 0 ? console.log("Fizz") : 
    i % 5 === 0 ? console.log("Buzz") : 
    console.log(i);
}