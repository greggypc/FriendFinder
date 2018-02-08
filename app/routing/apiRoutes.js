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
      var total = 0;
      var lowestArray = [];
      var best = 0;
      var userData =  req.body;
      var userScores = userData.scores;
      
     //console.log(userScores);
     friendsArray.push(userData);

    // for every entry in friendsArray:
    for(var i = 0; i <= friendsArray.length-1; i++) {

      // subtract each value in friendsArray score from corresponding userData score
      // this becomes new array diff
        diff = friendsArray[i].scores.map(function(item, index) {
        // item is current value of friendsArray
        // using index to get value from array userScores
        // return difference of each set of scores to array diff
        return Math.abs(item - userScores[index]);
      })
      console.log(diff);

      // reduce diff to a single number total
      total = diff.reduce(function (prev, current) {
        return prev + current;
    }, 0);

    console.log(total);

    // push each total into lowestArray of scores
    lowestArray.push(total);

    }; 
    
    console.log(lowestArray);
    
    // find lowest score in lowestArray
    for (var j = 0; j < lowestArray.length; j++) {
      if (lowestArray[j] <= lowestArray[best]) {
        best = j;
      }
    }
         // push newest customers data into friendsArray
         friendsArray.push(userData);
         
         // return name and photo of lowestscore/best match
         res.json(friendsArray.name[best]);
         res.json(friendsArray.photo[best]);
         
         
       
        
      });  //end post    
};      