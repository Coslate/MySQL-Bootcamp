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
    database:'join_us'
}); 


