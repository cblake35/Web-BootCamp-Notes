/* Functions */

// General Ideas: at their broadest level, functions do the following:
// 1) They take some input which the function will handle/process
// 2) They process the input given to them
// 3) They usually, but not always, return some value
// 4) They can be invoked(used) as many times as we want, cutting down on the code repitition

// example 1
function numFunc(num){
    return num + 1; //will save output in the codebase but wont see it unless console.log is used
}

newFunc(3);

// example 2

function sentence(firstName, lastName) {
    return `My firstname is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence("Chris", "Blake"));
// same output
let mySentence = sentence("Little", "Nicky");
console.log(mySentence);

// example 3 : a function that take in a complex type and console.log each item in the input array

let arr = [1, true, {key: "string"}, [0, false, null], 'heya!'];
let arr2 = [5, 6, 7, 8, 9, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr) {
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);