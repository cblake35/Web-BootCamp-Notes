/* Array Destructuring and Spread Operator */

/* Ability to unpack values from arrays, or properties from objects into distinct variables while using the 
spread operator (...) */

/* Spred operator pulls out all array elements and returns as a standalone list of elements. */

let fullName = ["Paul", "Niemczyk"]

let unpackedFullName = [...fullName]

console.log(unpackedFullName)


// let editedFullName = [fullName]

// console.log[editedFullName]

//this places a string in front of the fullName array
fullName.unshift("Mr.")

//As you can see fullName and unpackedFullName are different. (Clean copy of original array)
console.log(fullName, unpackedFullName)

let prices = [10.99, 5.99, 22.99, 6.88]
// will return NaN because Math.min needs an integer and not an object/array
// console.log(Math.min(prices))

console.log(Math.min(...prices)) //destructures an array to allow a method to grab the value of the arrays contents

//Primitive data types stored inside memory as a variable and a value

let x = 10;
let y = "abc";

let a = x;
let b = y;

console.log(x, y, a, b);


//JS has 3 data types that are objects which reference to a value:
/* 
    -array
    -function
    -object
*/

let arr = []