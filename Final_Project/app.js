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

//var q = "SELECT 1+1 AS solution";
//var q = "SELECT 1+5";
var q = "SELECT CURTIME() as cur_time, CURDATE() as cur_date, NOW() as now_time";
connection.query(q, function(error, results, fields){
  if(error) throw error;
  console.log("The time: ", results[0].cur_time);
  console.log("The date: ", results[0].cur_date);
  console.log("Now is  : ", results[0].now_time);
})

connection.end();




