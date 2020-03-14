var express = require('express');
var app = express();

//Then open your browser. Enter "http://127.0.0.1:8080/" for the example with port = 8080 in app.listen(), then the screen will print the message you set in app.get(). 
//app.get("/") means enter the browser your current default path, which is "http://127.[0-255].[0-255].[1-254]:8080"
app.get("/", function(req, res){
    //console.log(req);
    res.send("Welcome to the Home Page!");
});

app.get("/joke", function(req, res){
    //console.log(req);
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
});

app.get("/random_num", function(req, res){
    //Generate a random number between [1, 10].
    var num = Math.floor(Math.random()*10)+1;
    res.send("Your lucky number is "+num);
});

//You can set any port you want to run your app on.
//Be noticed that port < 1024 need to run with sudo. Ex. > sudo node ./app.js
//port >=1024 do not need sudo. Ex. > node ./app.js
app.listen(8080, function(){
    console.log("Server running on 8080.");
});
