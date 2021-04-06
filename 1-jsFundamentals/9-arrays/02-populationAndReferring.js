/* Arrays */

// an array has [] brackets and can hold multiple data types that are 
// indexed starting at 0, 1, 2....(iterable)

let students = ['Tony', 'Marshall', 23, true, ["Ryan", 'Keisha']];
//                  0       1       2   3       4                   

console.log(typeof students); //typeOf doesnt tell me that variable is an array -> object
console.log(students instanceof Array); //instanceOf tells me my array is an array

console.log(students[2]); //getting info from an array is called 'Square Bracket Notation'
console.log(students[0]);

console.log(students[4][0]); //return the actual value of the item within an arrays array

//recall for-of loop(note: can only be used in iterable objects)

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'] ;

for (f of food){   //for of gets the actual value of the item in the array and for in grabs the index
    console.log(f);
}

//array methods
food.push('Pizza'); //push method adds elements to the array
console.log(food);

food.splice(2, 1, 'Coconut'); //what position to insert to; how many elements to remove after insertion; the new item to add
console.log(food);              //adds after shrimp, removes quesadilla, adds coconut

food.pop() //removes the last element of an array
console.log(food);

food = food.slice(0, 4); //the first param is the first elem to slice from the array(included), while the second
console.log(food);      // number is the stop position(not to be included)

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements
// and their index numbers

food.forEach((f) => console.log(f));

food.forEach((f, index) => { //take in two params: the item in each array, and the index of that item
    console.log(f); 
    console.log(index);
});


let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(2, 0, 'Batman'); //if second param is 0, no elements will be removed
console.log(movies);

movies.forEach(movie => console.log(movie)); //check all elements within the array(movie can be anything, 
// represents the items within the array)

//lets do the following with an array
//check if we're working with an array
// flip the values within the array(i.e. what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, lets print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);

if (arr instanceof Array){ //*remember -- checks if the object is an array - typeOf doesnt work with an array
    let revArr = arr.reverse(); //reverse() is a method that reverses the elements of an array
    revArr.forEach(numbers => console.log(numbers));
}

