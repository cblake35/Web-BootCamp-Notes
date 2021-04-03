/* For Of Loops */

// of requires that your "thing" that your looping through is iterable which means it needs to be numbered. doesnt work for objects since objects key/value pair are not numbered

let student = {name:"Peter", isAwesome: true, degree: "javascript", week: 1};

for (item of student) {
    console.log(item); //will throw an error, because object are not iterable
}

// for of grabs the actual value; for in grabs the key(index)

let catArray = ["tabby", "birtish shorthair", "burmese", "maine coon", "rag doll"];

for (cat of catArray) {
    console.log(cat, "says meow");
}