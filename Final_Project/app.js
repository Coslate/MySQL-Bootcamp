var faker = require('faker');
var mysql = require('mysql');

//console.log(faker.internet.email());
//console.log(faker.date.past());

/*
function GenerateAddress(){
    console.log(faker.address.streetAddress());
    console.log(faker.address.city());
    console.log(faker.address.state());
    console.log();
}

GenerateAddress();
GenerateAddress();
GenerateAddress();
*/

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.MYSQL_PW,
    database:'join_us'
}); 

/*
//var q = "SELECT 1+1 AS solution";
//var q = "SELECT 1+5";
var q = "SELECT CURTIME() as cur_time, CURDATE() as cur_date, NOW() as now_time";
var datetime = new Date();
connection.query(q, function(error, results, fields){
  if(error) throw error;
  console.log("The time: ", results[0].cur_time);
  console.log("The date: ", Date(results[0].cur_date));
  console.log("Now is  : ", Date(results[0].now_time));
})
*/

var q = 'SELECT * FROM users';
var count = 'SELECT COUNT(*) AS total FROM users';
connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results);
});
connection.query(count, function(error, results, fields){
    if(error) throw error;
    console.log('\ntotal count of users = '+results[0].total);
});

connection.end();




