
//get.ElementsById()

const header = document.getElementById("header");

header.style.color = "pink";


// get.ElementsByClassName()


const errorList = document.getElementsByClassName('error-list');

console.log(errorList);

//example 1 looping

for (let i = 0; i < errorList.length;i++) {
    errorList[i].style.color = 'red'
}

//example 2 looping

for(error of errorList){
    error.style.color = 'green';
}

//example 3 looping forEach // CAN NOT DO!!

// errorList.forEach(error => {error.style.color = "purple"}); WILL RETURN AN ERROR



// getElementsbyTagName('')

const tags = document.getElementsByTagName('p');

tags[0].innerText = 'I changed the paragraph by getElementsByTagName!!'
console.log(tags);

const lis = document.getElementsByTagName('li');

lis[1].innerText = `I changes the Li's! too!`;
console.log(lis);

lis[0].style.fontStyle = 'italic';
lis[1].style.fontStyle = 'italic';


for (let i = 0; i < lis.length; i++){
    if(lis[i] == lis[0]) {
        lis[i].style.fontStyle = 'oblique';
    } else {
        lis[1].style.fontStyle = 'normal';
    }
}


//querySelector()

const headerTwo = document.querySelector("#header");

headerTwo.innerHTML = 'I changed the header for the 2nd time using querySelector!';
console.log(headerTwo);


const errorList2 = document.querySelector(".error-list");
console.log(errorList2);

const errorList3 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList3);


//querySelectorAll()

const headerTags = document.querySelectorAll('h1');

console.log(headerTags);

headerTags.forEach(header => {
    header.style.color = 'green';
});


var boom = () => console.log('meow');

boom();

const listItems = document.querySelectorAll(".error-list");


listItems.forEach(item => item.style.color = "orange");