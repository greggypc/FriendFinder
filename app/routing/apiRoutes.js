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
      var userData = req.body;
      var userScores = userData.scores;
     console.log(friendsArray);
     friendsArray.push(userData);
      
    //   var friendsArray = [
    //     {scores: [5,4,3,2,4,5,2,1,3,4]
    //     },
    //     {scores: [2,0,5,6,3,2,4,0,2,6]
    //     },
    //     {scores: [6,5,2,3,4,1,5,6,3,2]
    //     }
    //   ];
    // var userData = [2,0,5,6,3,2,4,0,2,6];
    

//     for(var i = 0; i <= friendsData.length-1; i++) {
//   var diff = friendsData[i].scores.map(function(item, index) {
//     // In this case item correspond to currentValue of array a, 
//     // using index to get value from array b
//     return Math.abs(item - userScores[index]);
//   })
//   console.log(diff);
//   var total = diff.reduce(function (prev, current) {
//     return prev + current;
// }, 0);

// console.log(total);
// lowestArray.push(total);

// }; 
// console.log(lowestArray);
//console.log(Math.min(...lowestArray));
 
         res.json(userData);
         res.json(userData);
       
        
      });  //end post    
};      