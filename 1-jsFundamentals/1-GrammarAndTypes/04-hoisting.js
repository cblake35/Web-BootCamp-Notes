/* Hoisting */


// example 1
console.log(scissors);
var scissors = "blue";

// example 1 breakdown:
var scissors;
console.log(scissors);
scissors = "blue";

// example 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();