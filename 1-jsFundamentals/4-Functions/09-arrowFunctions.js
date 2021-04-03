/* Arrow Functions */
// ARROW FUNCTION DO NOT GET HOISTED!

// normal function declaration
function beer(){
    console.log('I love beer!');
}
beer();

// normal function expression
let tea = function(){
    console.log('Tea is the best!')
}

tea();

// arrow function ALWAYS anonymous
let hotChocolate = () => {
    console.log('Hot chocolate is king!')
}

hotChocolate();

let animals = (kittens, puppies) => {
    return `I have ${kittens} and cats and ${puppies} dogs`;
}

console.log(animals(4, 6));


// concise vs block body arrow functions

// concise body
let appples = x => `there are ${x} apples`; //if you have a single argument you dont have to use the parenthesis
console.log(apples(10));                    // and you dont have to use the curly braces or type return

// block body
let bananas = (x) => { //return must be used in a block body arrow functions
    return `There are ${x} bananas`;
}
console.log(bananas(4));