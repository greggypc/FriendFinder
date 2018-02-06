// LOAD DATA
// Link our routeto data source.
// These data sources hold firends array
// ===============================================================================

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
       
        var a = [2,3,2,6,3,2,1,4,3,2],
        b = [2,0,5,6,3,2,4,0,2,6],
        x = [];

        for(var i = 0;i<=b.length-1;i++)
        x.push(Math.abs(a[i] -b[i]));

        console.log(x);
        
        friendsData.push(req.body);
          res.json(true);
       
      });    
};      