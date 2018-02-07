// LOAD DATA
// Link our routeto data source.
// These data sources hold firends array
// ===============================================================================

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
    // API GET Requests
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
       
         var diff = [];
      console.log("are you reading?");

      console.log(userData);
        console.log(friendsArray.scores[0]);
        for (var j = 0; j <= friendsArray.length-1; j++) {
 

       var userScores = userData.scores;
       var friendsScores = friendsArray.scores;

        for(var i = 0; i <= userData.length-1; i++) {
            
                diff.push(Math.abs(userData.scores[i] - friendsArray.scores[i]));
                var total = diff.reduce(function (prev, current) {
                    return prev + current;
                }, 0);
                 console.log(i);
        };

         };  //end main for loop.
         res.json(data.name);
         res.json(data.photo);
       
        
      });  //end post    
};      