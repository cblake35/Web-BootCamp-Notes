/* Asynchronous JS Functions */ 
/* 
    -async return a Promise
    -await makes function wait for a promise
*/


function standardFunction() {
    return "This is a standard function";
}

standardFunction();

// async function asyncFunction(){
//     return "this is an async function";
// }

// async function asyncFunction(){
//     return Promise.resolve("This promise has been resolved");
// }

// asyncFunction();

// async function  asyncAction(){
//     setTimeout(() => {
//         console.log("Async finally hit!")
//     }, 3000)
// }

// asyncAction();


/* Promises */
/*  -completed -> resolved
    -rejected
 */

let p = new Promise((resolve, reject) => {
    //Promise object with one function with resolve and reject parameters
    let a = 7 + 1;
    if (a === 2){
        resolve("Promise successful and Resolved");
    } else {
        reject("Promise is rejected");
    }
});

p.then((message) => {
    //anythin inside .then is a resolve. Takes a fx with a single parameter in our case
    console.log(`This is the then ${message}`)
}).catch((message) => {
    //anything inside .catch takes the reject statement. If .catch is not used it will throw an error****
    console.log(`This is the .catch() ${message}`)
}) 



//Try, Catch, Throw, and Finally : will not work with syntax errors, only works for runtime errors

try {
    //tests a block of code
    functionThatDoesntExist();
    console.log("Start of the try")
} catch(err) {
    //handles the error
    console.log("Error has occured " + err)
} finally {
    //executes the code after the try/catch regardless of the result
    console.log("Finally ALWAYS runs")
}


//Custom Errors


//example 1
let json = '{"age": 30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }
} catch(err){
    console.log(`JSON Error: ${err}`)
}

//example 2
function upperCase(name){
    if(typeof name != "string"){
        throw new TypeError("Name must be a string");
    }
    return name.toUpperCase();
}

