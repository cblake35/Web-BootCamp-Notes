// var is function scoped and declaration loads up before file is read
console.log(x);
var x = 10;

// let(block-scoped) must be declared first before being called else an error will occur
console.log(X);
var x = 15;

let myNum = 5;
let myName = "Chris";

console.log(typeof myName); //typeof identifies a datatype of a variable

//Git
// Version control system designed to keep chronological timeline of all code changes

// cd name_of_folder -> take you to the designated folder
// .. cd -> move you up in the folder hierarchy
// ls -> lists items inside existing folder
// pwd -> shows the path your currently in

// to initiate a repository
// git init
// staging files for a commit
// git status -> tell you the status of your repository
// git add <file_name> OR git add . (will add everything in the folder you're in)
// git commit -m "Your commit message here" -> will commit your files 
// to view commit use -> git log

// To connect to a remote repository
// go to GitHub and create a new repository
// copy HTTPS url provided
// to connect -> git remote add origin <link>
// to push to repository
// git push origin master