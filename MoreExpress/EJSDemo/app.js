// declares and runs express
var express = require ("express");
var app = express();

// links all files in public folder
app.use(express.static("public"));
// commonizes .ejs files for shorter code
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Is Kobe better than LBJ?", author: "DFS"},
		{title: "Is MJ still the GOAT?", author: "IT"}
	]
	res.render("posts", {posts: posts});
});


app.listen(3000, function() { 
  console.log('Yo dog, listening on 3000'); 
});
// no idea why css