var express = require('express'); //Use require to call express from package.json

//Create our app
var app = express(); //Call express library as a function
const PORT = process.env.PORT || 3000; //access default port object, if that object don't exist,, then go with 3000

app.use(function(req, res, next){ //Middleware
    if(req.headers["x-forwarded-proto"] === "http") {
    res.redirect("http://" + req.hostname + req.url);
} else {
    next(); //Request process as normal
    
}

});

app.use(express.static('public')); //Expose the public designated folder for the server

//Starrt the server for port 3000
app.listen(PORT, function(){
    console.log("Express server is up on port " + PORT);
})