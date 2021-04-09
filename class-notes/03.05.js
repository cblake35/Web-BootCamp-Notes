/* ARRAY & OBJECTS */

//Array - high-level list like object used to be traveresed and mutated.
//      - uses integers as element index
//      - can be accessed by bracket notation [index] or dot notation [method]
//      - arrays start at zero index
//          -last object at array length-1


//How to create an Array

let british = ['Rolls Royce', 'Bentley', 'Caterham', 'Aston Martin'];

console.log(british.length - 1); //gives us the index of the last object in the array; i.e. 3
                                // this works because array starts at 0 and .length starts counting each object
                                //from 1

console.log(british[british.length - 1]); //gives us the value of the last element within an array



//push method - appends a new item to the end of an array

let arr = ['hello', 'there', 'meow'];

arr.push("bowow");

console.log(arr);


//splice method - removes an element from an array => start parameter, number of elements to remove from start point, new item to be added/replace

arr.splice(1, 2, 'leopard');

console.log(arr);


//pop method - removes the last index from an array and returns the array

arr.pop();

console.log(arr);


//unshift method - adds new elements to the beginning of an array and returns array length

arr.unshift('mooo', 'mehhh');

console.log(arr);


//shift method - removes the first item of an array ; the returned value of this method is the removed item

arr.shift


// indexOf method - searches the array for a specified item and returns its position

let arr = ['hello', 'there', 'meow'];

console.log(arr.indexOf('there')); //will return 1


// includes method - determines whether an array contains a specified element; return true if it does, false if it doesnt

console.log(arr.includes('meowwww')); //will return false




//ADVANCED ARRAY MANIPULATION

let german = ['BMW', 'Mercedes', 'Audi', 'Porsche', 'Alpina', 'VW'];

for (cars of german) {
    console.log(cars);
};


//array.forEach() runs a function for each element in an array

german.forEach(car => console.log(car));

//method above is same as below without utilizing arrow functions

german.forEach(function(car){
    console.log(car);
});


//array.map() - creates a new array with the results of calling a function for every array element. does not change the original array

let germanUpperCase = german.map(car => car.toUpperCase());
console.log(germanUpperCase);


//array.filter() - creates a new array with the results of calling a function for every array element.

let starts = german.filter(car => car.startsWith('A'));
console.log(starts);







/* OBJECTS 
are containers for named values called properties or methods.
    - exists as a string
    - .property
    - .method()
    - associative arrays(each property is associated with a string value)
    - can't use arrow functions within the object
*/

//define JS object with an object literal

let car = {
    make: 'Porsche',
    model: '911',
    country: 'Germany',
    driver: 'Walter Rohl'
}

console.log(car.model)


//object property reassignment

car.make = 'Maserati';
car['model'] = 'GranTurismo 9'; 
console.log(car);


//Object constructor
let client = new Object; //creates a new object without hard coding the info

client.name = 'Juan Pablo'; // dynamically creates a new key/value pair added into the new client object
client['car'] = 'Mustang'; // same here ^^

console.log(client);



let manager = {
    firstName: 'Brad',
    lastName: 'Titus',
    birthYear: 1990,
    calcAge: function(birthYear){
        return 2021 - birthYear;
    }
}

console.log(manager.calcAge());