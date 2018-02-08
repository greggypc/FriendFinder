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
        var diff = [];
        var lowestArray = [];
        for(var i = 0; i <= friendsArray.length-1; i++) {
      var diff = friendsArray[i].scores.map(function(item, index) {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return Math.abs(item - userData[index]);
      })
      console.log(diff);
      var total = diff.reduce(function (prev, current) {
        return prev + current;
    }, 0);
    console.log(total);
    lowestArray.push(total);

  }; 
console.log(lowestArray);
console.log(Math.max(...lowestArray));


        // for(var i = 0; i <= friendsArray.length-1; i++) {
        //     //for(var i = 0; i <= userData.length-1; i++) {
        //         x.push(Math.abs(userData[i] - friendsArray[i].scores[i]));
        //         var total = x.reduce(function (prev, current) {
        //             return prev + current;
        //         }, 0);
        //   //  }
           
        //friendsData.push(req.body);
        //res.json(true);
        }
      });    
};      