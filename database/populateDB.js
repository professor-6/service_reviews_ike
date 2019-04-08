const csv = require('csv-parser');
const fs = require('fs');
const db = require('./db');


var dataReadFromDiskToDB = function(fileName, callback){
  fs.readFile( __dirname + `/data/${fileName}.json`, (err, data) => {
      if (err) {
        console.error(' ERROR : Cannot read file');
      }
      var  data = JSON.parse(data);
      var queryString = `INSERT INTO ${fileName} SET ?`;

      for(var i = 0  ; i < data.length ; i++) {
        db.query(queryString, data[i], function (err, results){
          if (err){
            console.error('ERROR : Could not seed database');
            throw err;
          }
          console.log(`SUCCESS : inserted records into table : ${fileName}`)
        });
      }
      // execute callback for table::ratings_ambience
      if (fileName === 'ratings_ambience'){
        callback();
      }
  });
};

// pull restaurant name from restaurants_id_name.csv and insert into
// table::ratings_ambience
var upDateResName = function(){

  var names = [];

  fs.createReadStream(__dirname + '/data/restaurants_id_name.csv')
    .pipe(csv())
    .on('data', (row) => {
      names.push(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      for (var i = 0 ; i< names.length ; i++) {
        var queryString = `UPDATE ratings_ambience
                            SET restaurant_name = "${names[i].name}"
                            WHERE id = ${i+1}`;

        db.query(queryString, function (err, results){
          if (err){
            console.error('ERROR : Could not seed database');
            throw err;
          }
          console.log(`SUCCESS : inserted records into table : ratings_ambience`)
        });
      }
    })
}

// read files fron disk and populate tables in  DB
// dataReadFromDiskToDB("reviewer_info");
dataReadFromDiskToDB("reviews");
dataReadFromDiskToDB("ratings_ambience", upDateResName);

