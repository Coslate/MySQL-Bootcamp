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

//selecting data
/*
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
*/

//inserting data
/*
var q = 'INSERT INTO users(email) VALUES("rusty_the_dog@gmail.com");';

connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results);
});
*/

//inserting data take 2
//var person = {email : 'Jenny467@gmail.com'};
/*
var person = {email : faker.internet.email()};

connection.query("INSERT INTO users SET?", person, function(error, results, fields){
    if(error) throw error;
    console.log(results);
});
*/

//inserting data take 3
/*
var person = {
    email: faker.internet.email(),
    created_at: faker.date.past()
};
 
console.log(person);

var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});

//show the compiled sql being sent to connection
console.log(end_result.sql);
*/

//inserting lots of data !!!
/*
var data = [[
    ['blah@gmail.com', '2017-05-01 03:51:37'],
    ['ugh@gmail.com', '2017-05-01 03:51:37'],
    ['meh@gmail.com', '2017-05-01 03:51:37']
]];

console.log(data);
console.log();
console.log([data]);

var q = 'INSERT INTO users(email, created_at) VALUES ?';

var end_result = connection.query(q, data, function(err, result) {
  if (err) throw err;
  console.log(result);
});

console.log('sql_command = '+end_result.sql);
*/

//inserting lots of data take 2 !!!
var data = [];
for(var i=0;i<500;++i){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ])
}

console.log(data);
console.log();
console.log([data]);

var q = 'INSERT INTO users(email, created_at) VALUES ?';

var end_result = connection.query(q, [data], function(err, result) {
  if (err) throw err;
  console.log(result);
});

console.log('sql_command = '+end_result.sql);
//console.log(faker.date.past());

connection.end();




