var mysql = require('mysql');
var express = require('express');
var body_parser = require("body-parser");

//----------------------Use express server-----------//
var app = express();

//----------------------Use the css file under ./public/*.css for rendering-----------//
app.use(express.static(__dirname+'/public'));

//----------------------Set setting of the view engine to ejs-----------//
//Express will search .ejs in "views" folder default
app.set('view engine', 'ejs');
//Intrepret the request from user with 'qs' library. 
//Parse application/x-www-form-urlencoded
//The parsing result will be in req.body hash data structure/
app.use(body_parser.urlencoded({extended:true}));

//----------------------Open connection to MySQL-----------------------//
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.MYSQL_PW,
    database:'join_us'
}); 

//----------------------Run web request-------------------------------//
//Then open your browser. Enter "http://127.0.0.1:8080/" for the example with port = 8080 in app.listen(), then the screen will print the message you set in app.get(). 
//app.get("/") means enter the browser your current default path, which is "http://127.[0-255].[0-255].[1-254]:8080"
app.get("/", function(req, res){
    //Find count of users in DB(MySQL)
    var q = "SELECT COUNT(*) as total from users";
    var end_result = connection.query(q, function(err, result) {
        if (err) throw err;
        //console.log('sql_cmd = '+end_result.sql);
        //console.log(result);

        //Respond with that count
        //res.send("We have "+result[0].total+" users in our database.");
        
        //Being joint with app.set('view engine', 'ejs'),
        //will use ./home/*.ejs file to render the html page.
        res.render("home", {data: result[0].total});
    });   
});

app.post("/register", function(req, res){
//    console.log('req = ');
//    console.log(req);
//    console.log("POST REQUEST SENT TO /REGISTER "+req.body.email);
    var person = {
        email: req.body.email
    };
    
    //Will be something like the following in MySQL.
    //For example: INSERT INTO users SET `email` = 'awrr@gmail.com'
    var query_insert = connection.query('INSERT INTO users SET ?', person, function(err, result){
        if(err) throw err;
        res.redirect("/"); //Redirect to the home page.
        //res.send("Thanks for joining our wait list!");
        //console.log('sql = ');
        //console.log(query_insert.sql);
        //console.log('result = ');
        //console.log(result);
    });
});

app.get("/joke", function(req, res){
    //console.log(req);
    var joke = "<strong>What do you call a dog that does magic tricks?</strong> <em>A labracadabrador</em>.";
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

