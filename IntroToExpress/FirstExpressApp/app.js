var express = require("express");
var app = express();

// "/" ==> "Hi There!"
app.get("/",function(req, res){
	res.send("Yo Dog!");
});
// "/bye" ==> "Goodbye"
app.get("/bye", function(req, res){
	res.send("Ta-Ta there, Chomo");
})
// "/dog" ==> "Mew!"
app.get("/dog", function( req, res){
	console.log("You rang?")
	res.send("Doggy Dogg World")
});

// Reddit example
app.get("/r/:subredditName", function(req, res){
var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!")
});

// Reddit example2
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	console.log(req.params);
	res.send("Welcome to the comments page!")
});

// use "*" as a catch-all
// ORDER OF ROUTES IS IMPORTANT!
app.get("*", function(req, res){
	res.send("You Are A Star")
})

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});