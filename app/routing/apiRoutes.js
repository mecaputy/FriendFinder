// This file should contain two routes 
var friendData = require("../data/friends");
//a GET route with the url /api/friends to display a JSON of all possible friends
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
//a POST route /api/friends - this will be used to handle incoming survey results -- this route will also be used to handle the compatibility logic
app.post("/api/friends", function(req, res){
    friendData.push(req.body);
});
};

//add a function to check answers and return a result