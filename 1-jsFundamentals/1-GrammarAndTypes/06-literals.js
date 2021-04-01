/* Literals */

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//                  0           1       2           3           4
console.log(weekDays.toString());
console.log(weekDay[3]);

let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef and turkey"
}

console.log(soup.c);

// array and object literals can hold primitive and complex types(arrays, object, functions)


// Array Literal
let complexArrLiteral = [1, true, "Academy", [1, 2, 3], {key: "test"}, function(){return "yes"}];

console.log(complexArrLiteral[3]);

// Object Literal
let complexObjectLiteral = {
    num: 1,
    boolean: true,
    string: "Academy",
    arr: [1, 2, 3],
    obj: {key: "test"},
    func: function(){ return "yes"}
}

console.log(complexObjectLiteral.obj)
