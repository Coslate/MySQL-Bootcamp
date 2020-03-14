var mysql = require('mysql');
var express = require('express');

//----------------------Open connection to MySQL-----------------------//
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.MYSQL_PW,
    database:'join_us'
}); 

//----------------------Run web request-------------------------------//
var app = express();
//Then open your browser. Enter "http://127.0.0.1:8080/" for the example with port = 8080 in app.listen(), then the screen will print the message you set in app.get(). 
//app.get("/") means enter the browser your current default path, which is "http://127.[0-255].[0-255].[1-254]:8080"
app.get("/", function(req, res){
    //Find count of users in DB(MySQL)
    var q = "SELECT COUNT(*) as total from users";
    var end_result = connection.query(q, function(err, result) {
        if (err) throw err;
        console.log(result);
        //Respond with that count
        res.send("We have "+result[0].total+" users in our database.");
    });   
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

//----------------------Run web listener port-------------------------//
//You can set any port you want to run your app on.
//Be noticed that port < 1024 need to run with sudo. Ex. > sudo node ./app.js
//port >=1024 do not need sudo. Ex. > node ./app.js
app.listen(8080, function(){
    console.log("Server running on 8080.");
});

