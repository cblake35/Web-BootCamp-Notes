/* For Loops */

/* loops offer a quick and easy way to do something repeatedly */

// loop structure: creation of an indexing vairable, a run condition, change to the indexing variable

// count to 10 from 0 and log the numbers
for (let i = 0; i < 11; i++) {
    console.log(i);
}

// loops can run infinitely and are bugs
// for let( let i = 0; ;i++){
//     console.log(i);
// }

//  diplay the letters in a name individually
let name = "Ezekiel";

for (let i = 0; i <  name.length; i++) {
    console.log(name[i]);
}

// for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random() * 30);
let increment = 3;

for ( let i = start; i <= stop; i = i + increment) {
    console.log(i);
}