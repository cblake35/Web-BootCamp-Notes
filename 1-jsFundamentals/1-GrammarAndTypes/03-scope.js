/*  SCOPE  */

// what is scope?
// JS has both local and global scope


// global scope because x is out the function declration
var x = 12;

function scope(){
    console.log(x);
}

scope();

// local scope because x is within the function declaration
x = 15;

function scope(){
    x = 23
    console.log(x)
}

scope();

// example 3

var x = 1;

function scope() {
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x); //runs 1st
    }
    scopeInner();
    console.log(x); //runs 2nd
}

scope();
console.log(x); // runs 3rd

// example 4 contrast with example 5

var x = 12;

function scope(){
    var x = 33;
    if(true){
        let x = 45; // 45
        console.log(x);
    }
    console.log(x); // 33
}

scope();
console.log(x); //12

// example 5 contrast with example 4

var x = 12;

function scope(){
    var x = 33;
    if(true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); // 45 -> var doesnt obey "block" scope; var is function scoped and let is block scoped
}

scope();
console.log(x);