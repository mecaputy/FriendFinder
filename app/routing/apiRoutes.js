// This file should contain two routes 
var friendData = require("../data/friends");
//a GET route with the url /api/friends to display a JSON of all possible friends
module.exports = function(app) {
   
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    
    app.post("/api/friends", function(req, res){


        var userInputScores = req.body.scores;
        var bestMatch;
        var scoreArr = [];

        for (var i = 0; i < friendData.length; i++) {
            var compareScore = [];

            for (var j = 0; j < array.length; j++) {
                compareScore += (Math.abs(friendData[i].scores[j] - parseInt(userInputScores[j])));
                
            }
            scoreArr.push(compareScore);
        }

        
        friendData.push(req.body);
    });
    };
    
//a POST route /api/friends - this will be used to handle incoming survey results -- this route will also be used to handle the compatibility logic


//add a function to check answers and return a result
  //conver user's results into a simple array of numbers
  //comapate the difference between current user's score and other users question by question. add up the difference to calculate totalDifferece

//   Example: 
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5

//remember to use the absolute value of the differences Your app should calculate both 5-3 and 3-5 as 2, and so on.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.