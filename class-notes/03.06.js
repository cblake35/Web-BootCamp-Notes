let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//Challenge 
//Bronze
// pick an episode to console.log
// using dot notation, walk through the netflix object and print off both an episode number and an episode name

console.log(netflix.season1.seasonInfo.episodeInfo[0]) //prints the challenge


// Silver
// Create an object using an object constructor. Call it teacher and assign it properties of firstName, lastName
// className and isTenured with a boolean value.


let teacher = new Object

teacher.firstName = 'Bob';
teacher.lastName = 'Ross';
teacher.className = 'Art';
teacher.isTenured = true;

console.log(teacher);


// Gold
//Utilize existing object constructor to add teacher .kind property that utilizes a conditional statement which
//checks if .isTenured is true or false. If true, print INSIDE THE OBJECT 'This teacher is tenured' if not 
// print 'This teacher is not tenured'


teacher.kind = function(){
    if (this.isTenured){  // we use this because 'this' pertains to the teacher object itself
        this.service = 'This teacher is tenured'; //if we use teacher.service and the teacher object changes, teacher.service would not work
    } else {                                        // this makes the code more dynamic
        this.service = 'This teacher is not tenured';
    }
}

teacher.kind();
console.log(teacher);