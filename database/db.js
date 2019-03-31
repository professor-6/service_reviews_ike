var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'opentable'
})

connection.connect(function(err){
  if(err) {
    console.error('ERROR connecting to database');
  } else {
    console.log(`Connection to MySQL established at : ${connection.threadId}`);
  }
});

module.exports = connection;
