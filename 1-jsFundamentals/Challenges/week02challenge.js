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


// Bronze
/* Create for loop that runs until it has reached the end of the alphabet array, and prints each letter to the console */


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// for (let letter in alphabet) {
//     console.log(alphabet[letter]);
// }


// Silver
/* Write a conditional nested inside of for loop that checks if the index of each
 character in the alphabet array is even or odd. If the index is even, console.log
letter. If index is odd, console.log "index is an odd number" */

for (letter in alphabet) { //letter is an index within the alphabet array
    if ( letter % 2 === 0 ) {
        console.log(`The letter is ${alphabet[letter]}.`);
    } else {
        console.log(`Index is an odd number.`);
    }
}



/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff', //key:value pairs
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Imli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

let arr = [];
let vowels = ["A", "E", "I", "O", "U"];

for (item in fellowshipOfTheRing.members){
    if(vowels.includes(item[0])) {
    } else {
        arr.push(item);
    }
}

console.log(arr);

