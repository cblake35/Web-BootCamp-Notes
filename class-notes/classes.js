/* Classes are templates for JS objects */

class Teacher {
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }
}

let kLockhart = new Teacher("Kate", "Coding", 1, true);
console.log(kLockhart);




let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }

    whatHouse() {
        return `Welcome to ${this.address}. Beautiful ${this.bedrooms} bed, ${this.bathrooms} bath house!`
    }
}

let myHouse = new House("123 Too Cool Street", 20, 24);

console.log(myHouse.whatHouse());

//CLASS DECLARATION IS NOT HOISTED WHILE FUNCTION DELCRATION IS!! ***************************


///* PROTOTYPAL INHERITANCE = allows an object to inherit properties from another object, see example below */


let Garage = class extends House { // *extends House* allows you to borrow properties from the House object
    constructor(address, bedrooms, bathrooms, cars, width, height){
        super(address, bedrooms, bathrooms) //super consists of properties you want to borrow from another object
        this.cars = cars;
        this.width = width;
        this.height = height;
    }
}

console.log(new Garage())


//CHALLENGE

/* Create a Car class that takes make and model. 
Instantiate new class object named Porsche with same make and model of 911
*/

let Car = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

}

let myCar = new Car("Porsche", 911);

console.log(myCar);


//Challenge

/* Create an Options class that inherits Car parent function. Give it a property of transmission. give your 911
a manual or a PDK */

// let Options = class extends Car {
//     constructor(make, model, transmission, isManual) {
//         super(transmission, isManual);
//         this.transmission = transmission;
//         this.isManual = isManual;
//     }
// }

// let myOptions = new Options("Porsche", 911, "V8",  true);
// console.log(myOptions);


//Challenge 
/* Modify above class and create startCar method that returns string interpolated ruselt
of "Your 911 is running" */

let Options = class extends Car {
    constructor(make, model, transmission, isManual) {
        super(make, model);
        this.transmission = transmission;
        this.isManual = isManual;
    }

    startCar() {
        return `Your ${this.model} is running`;
    }
}

let myOptions = new Options("Porsche", 911, "V8",  true);

console.log(myOptions.startCar());
