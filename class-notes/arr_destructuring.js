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
// fullName.unshift("Mr.")

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

//examples

let arr = []

arr.push(1);

console.log(arr)

let students = [
    {
        name: "Abel Watson",
        age: 21
    },
    {
        name: "Jen Zimski",
        age: 34
    }
]

let bTitus = {
    name: "Brad Titus",
    age: 114
}

let copiedStudents = [...students] //makes a copy of the original array
console.log(students);
console.log("--------------------");
copiedStudents.push(bTitus); //pushes the brad object to the copiedStudents arr
console.log(copiedStudents);//brad object get added to copiedStudents arr but students array stays the same

//---------------------

let persons = [
    {
        name: "Zach",
        age: 38
    },
    {
        name: "Donovan",
        age: 30
    }
]

let copiedPersons = [...persons]

persons.push({
    name: "Anna",
    age: 29
})

copiedPersons[0].name = "Zachary";
persons[0].name = "Michael";


console.log(persons);
console.log("----------------------");
console.log(copiedPersons)

/* The return of the commands above returns Michael in person and copiedPersons array. This happens because we copied the 
address to the place in memory with the copiedPersons variable we created. We then changed the value of our name key
in the memory itself. Any changes we make to either of the arrays will be reflected in its counterpart
*/


let mappedPersons = persons.map(person =>({
    name: person.name,
    age: person.age
}))

mappedPersons[0].name = "Zachary"

console.log(persons)
console.log("-------------")
console.log(mappedPersons)

//Array Destructuring Continued..

//let fullName = ["Paul", "Niemczyk"]

// let firstName = fullName[0] //takes the first index of the fullname array and assigns it to a variable

// console.log(firstName);

//shortcut below
/* JS pulls values from fullName and assigns them based off their positions to the variables we declared
using destructuring */

// let [firstName, lastName] = fullName

// console.log(firstName);
// console.log(lastName);

//Rest Syntax - allows us to pull certain information from an array, see syntax below
// - utlizes the spread operator (...) to condense values into a single element rather than unpacking them.
// - any values left over from the original object will be packaged inside of it
// - Values can be skipped before packing them, by utilizing commas
// - Rest operator need to be the last item in the array or an error will occur

let restArray = ["Paul", "Niemczyk", "Omit 1", {month: 6, day: 15, year: 1990}, "Omit 2", {sport: "basketball"}, "Omit 3"];

let [firstName, lastName, , , ,...myObject] = restArray; //commas lets us skip value we dont need from the array, each space between the arrays = ommitted value

console.log(firstName);
console.log(lastName);
console.log(myObject);


