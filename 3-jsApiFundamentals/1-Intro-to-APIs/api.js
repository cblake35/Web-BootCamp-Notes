const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('div');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e){
    e.preventDefault();

    fetch(baseURL)
    .then(result => result.json()) //jsonifys the data and turns it into an object
    .then(data => {
        console.log(data);
        displayRockets(data);
    });
}

//function that displays the data that we want to display using the jsonified object we fetched
function displayRockets(rockets){
    rockets.forEach(item => {
        //creates each item within the rockets data
        let rocket = document.createElement('img');
        let rocketName = document.createElement('h1');
        //changes the attr values and html value to manipulate data. We use dot notation to access the keys of the jsnofied data we 
        // fetched and in turn use it to display data in the html page
        rocket.src = item.flickr_images[0];
        rocketName.innerHTML = item.name;
        //every element needs to be appended in order for them to be created. This appends the elements we created as children 
        //elements of div
        spaceShips.appendChild(rocketName);
        spaceShips.appendChild(rocket);
        console.log(rocketName);
    })
}