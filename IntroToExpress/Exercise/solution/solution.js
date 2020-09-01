// declare express as var and require
var express = require("express");
// call express as vap app
var app = express();

app.get("/", function(req, res){
	res.send("Yo dog, welcome to my project");
});

// Animals

app.get("/speak/:animal", function(req,res){
	var sounds = {
		pig: "oink",
		cow: "moo",
		dog: "yo",
		cat: "time to eat",
		goldfish: "..."
	}
	
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	
		res.send("The " + animal + " says '" + sound + "'");
		});

// repeat method
app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = ""
	
	for(var i=0; i < times; i++){
		result += message + " ";
	}
	res.send(result)
});

// catch all route
app.get("*", function(req, res){
	res.send("No work")
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
  console.log('Yo dog, listening on 3000'); 
});