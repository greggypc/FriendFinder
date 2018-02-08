// LOAD DATA
// Link our routeto data source.
// These data sources hold friends array
// ===============================================================================

var friendsArray = require("../data/friends");


// ROUTING

module.exports = function(app) {
    // API GET Requests
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsArray);
    });
  
    app.post("/api/friends", function(req, res) {
      var diff = [];
      var lowestArray = [];
      var best = 0;
      var userData =  req.body;
      var userScores = userData.scores;
      
     console.log(userScores);
     friendsArray.push(userData);

    for(var i = 0; i <= friendsArray.length-1; i++) {
      var diff = friendsArray[i].scores.map(function(item, index) {
        // item is currentValue of friendsArray
        // using index to get value from array userScores
        // return difference of each set of scores to array diff
        return Math.abs(item - userScores[index]);
      })
      console.log(diff);

      // reduce diff to a single number total
      var total = diff.reduce(function (prev, current) {
        return prev + current;
    }, 0);

    console.log(total);

    // push each total into array of scores
    lowestArray.push(total);

    }; 
    
    console.log(lowestArray);
    
    // find lowest score in lowestArray
    for (var j = 0; j < lowestArray; j++) {
      if (lowestArray[i] <= lowestArray[best]) {
        best = j;
      }
    }
         // return name and photo of lowestscore/best match
         res.json(friendsArray.name[best]);
         res.json(friendsArray.photo[best]);
         
         // push newest customers data into friendsArray
         friendsArray.push(userData);
       
        
      });  //end post    
};      