
fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => res.json())
    .then(data => console.log(data))


// async and await allows us to write promised based code as if they were synchronous(ran from top to bottom) and not break the execution
// thread in this example console.log wont fire until the function is called. if written as:
//this function will fire console.log first before executing the function since it's ran ansynchronously
// function slowResult() {
//     fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//         .then(res => res.json())
//         .then(data => console.log(data))
//     console.log('this is a message')
// }

async function slowResult() {
    //  await waits until the promise returns a result
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => res.json())
        .then(data => console.log(data))
    console.log('this is a message')
}

slowResult();