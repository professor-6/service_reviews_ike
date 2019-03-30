const csv = require('csv-parser');
const fs = require('fs');
const db = require('./db');


// var dataReadFromDisk = function(fileName){
  fs.readFile( __dirname + `/reviewer_info.json`, (err, data) => {
      if (err) {
        console.error(' ERROR : Cannot read file');
      }
      var  student = JSON.parse(data);
      // console.log(student)
      console.log(student[10]);
      // return JSON.parse(data);
      return student;
      // console.log(student[1]);

      var queryString = `INSERT INTO reviewer_info SET ?`;

      // for(var i = 0  ; i < student.length ; i++) {
        db.query(queryString, student, function (err, results){
          if (err){
            console.error('ERROR : Could not seed database');
            throw err;
          }
          console.log('SUCCESS : inserted records into database : ')
        });
      // }
      db.end();
  });


// };


// req.body = dataReadFromDisk('reviewer_info');
// reviewer_info.json
// reviews.json
// ratings_ambience.json

// data = dataReadFromDisk('reviewer_info');

// console.log(data)


// dataReadFromDisk('reviewer_info');
// dataReadFromDisk('reviews');
// dataReadFromDisk('ratings_ambience');

// reviewer_info.json
// reviews.json
// ratings_ambience.json