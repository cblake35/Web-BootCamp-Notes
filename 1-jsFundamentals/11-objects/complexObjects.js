/* Objects */

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'},
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix);

// dot notation
console.log(netflix.season1.seasonInfo.episodeInfo[3]); //get the object within the array

console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //*note to get info from an array use [] notation


//JSON - JavaScript Object Notation
//allows us to take a javaScript object and transform it into text format 
// and vice versa to access data

var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}



let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}


// Object.key and Object.values methods

console.log(Object.keys(spaceJam)); //Object.keys RETURNS AN ARRAY consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad).toString()); //toString outputs the keys into one single string

console.log(Object.values(spaceJam)) //Object.values returns the value of each key within the object in array format
console.log(Object.values(spaceJam.toonSquad));



let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let inc = 'fruit';

console.log(garden.inc); //wont work, because dot notation will match whatever is in the garden object
console.log(garden[inc]); //will work, [] notation will match the string of inc
                        // and find the key based on whats inside the garden object
                        //garden with a key of inc has a value of grape => garden['fruit'] = 'grape'

console.log(garden['vegetable']); //key has to be written as a string to get the value

//adding key value pair to objects using dot notation or square bracket notation

let baking = {};
baking['zucchini'] = 'better make some bread!';
//      key             value

baking.bestKeyEver = 'corn bread!';
//       key            value

console.log(Object.keys(baking)); //keys are properly added to the baking object
console.log(Object.values(baking)); //values are added to the baking object

console.log(baking);

//find the value of g within the garden object using a forEach loop and console.log the value


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}


let g = 'water'

Object.keys(garden).forEach(key => { //Object.keys(garden) find the keys within the garden object
    if (key == g){                   //forEach loops through those keys and looks if one of the keys equals the value of g
        console.log(garden[key]);    //console.logs the value of garden['water] which is true
    }
});
