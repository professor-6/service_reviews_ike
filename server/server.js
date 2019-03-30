const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('../database/db');
// const dataReadFromDisk = require('../database/data');

const app = express();
const PORT = 4000;

// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));

app.listen(PORT, function(){
  console.log(`Listening on port : ${PORT}`);
})

// ###################Need Refactor
app.post('/data/ratings_ambience', function(req, res){
  var queryString = `INSERT INTO ratings_ambience SET ?`;
  for(var i = 0  ; i < req.body.length ; i++) {
    db.query(queryString, req.body[i], function (err, results){
      if (err){
        console.error('ERROR : Could not seed database');
        throw err;
      }
      console.log('SUCCESS : inserted records into database : ');
      res.send(results);
    });
  }
});

app.post('/data/reviewer_info', function(req, res){
  var queryString = `INSERT INTO reviewer_info SET ?`;
  for(var i = 0  ; i < req.body.length ; i++) {
    db.query(queryString, req.body[i], function (err, results){
      if (err){
        console.error('ERROR : Could not seed database');
        throw err;
      }
      console.log('SUCCESS : inserted records into database : ');
      res.send(results);
    });
  }
});

app.post('/data/reviews', function(req, res){
  var queryString = `INSERT INTO reviews SET ?`;
  for(var i = 0  ; i < req.body.length ; i++) {
    db.query(queryString, req.body[i], function (err, results){
      if (err){
        console.error('ERROR : Could not seed database');
        throw err;
      }
      console.log('SUCCESS : inserted records into database : ');
      res.send(results);
    });
  }
});


// get all records
app.get('/data/reviewer_info', function(req, res){
  var queryString = `SELECT * FROM reviewer_info`;
  db.query(queryString, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});

// get on record
app.get('/data/reviewer_info/:id', function(req, res){
  var queryString = `SELECT * FROM reviewer_info WHERE id = ?`;
  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});

