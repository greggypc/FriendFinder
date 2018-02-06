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
       //test scores
        var friendsArray = [
            {scores: [5,4,3,2,4,5,2,1,3,4]
            },
            {scores: [2,0,5,6,3,2,4,0,2,6]
            },
            {scores: [6,5,2,3,4,1,5,6,3,2]
            }
          ];
        var userData = [2,0,5,6,3,2,4,0,2,6];
        var x = [];

        for(var i = 0; i <= friendsArray.length-1; i++) {
            //for(var i = 0; i <= userData.length-1; i++) {
                x.push(Math.abs(userData[i] - friendsArray[i].scores[i]));
                var total = x.reduce(function (prev, current) {
                    return prev + current;
                }, 0);
          //  }
           

        console.log(total);
        //friendsData.push(req.body);
        //res.json(true);
        }
      });    
};      