var express = require("express");
var app = express();

var express = require("express");
var app = express();

// Visiting "/" should print "hi there, welcome to my assignment"
app.get("/", function(req, res){
	res.send("Yo dog, welcome to my assignment")
});

// Animals & Animal Noises
app.get("/speak/:animalName", function(req, res){
var animalName = req.params.animalName;
var animalSound = req.params.animalSound;
	if(animalName === "cow"){
		animalSound = "Moo"
	}else if(animalName === "pig"){
		animalSound = "Oink"
	}else if(animalName === "dog"){
		animalSound = "Yo!"
	}else if(animalName === "cat"){
	animalSound = "Mew"
	}else if(animalName === "shark"){
		animalSound = "gulp"
	};
	res.send("The " + animalName + " says " + animalSound);
});

// Hello & Blah
app.get("/repeat/:greeting", function(req, res){
	var greeting = req.params.greeting;
	if (greeting === "hello"){
		res.send("Yo Dog!")
	}else if(greeting === "blah"){
		res.send("Blah")
	}
});
// unable to get repeat, but site is functioning

// Catch-all route for *, PUT AT BOTTOM
app.get("*", function(req, res){
	res.send("Sorry, page not found...what're you doing?!")
})

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
  console.log('Yo dog, listening on 3000'); 
});