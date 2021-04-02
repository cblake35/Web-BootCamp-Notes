/* For In Loops */

// for in does not require that the thing you loop through be numbered

let student = {name: "Peter", awesome: true, degree: "javascript", week:1};

for (let item in student){ //writing "let" is not required, writing "for (item in student)..." works the same exact way
    console.log(item);
    console.log(student[item]); //grabs value
}

let catArray = ["tabby", "birtish shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

// lets write a for-in loop that capitalizes the first letter of a name

let instructor = "paul";
let capName;

for (let n in instructor){
    if (n == 0 ){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName);