const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('../database/db');

const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, function(){
  console.log(`Listening on port : ${PORT}`);
})

// get all records from table::reviewer_info
app.get('/api/reviewer_info', function(req, res){
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

// get a record from table::reviewer_info
app.get('/api/reviewer_info/:id', function(req, res){
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


// get a record from table::ratings_ambience
app.get('/api/ratings_ambience/:id', function(req, res){
  var queryString = `SELECT * FROM ratings_ambience WHERE id = ?`;
  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});


// get a record from table::reviews
app.get('/api/reviews/:id', function(req, res){
  var queryString = `SELECT * FROM reviews WHERE id = ?`;
  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});


// get all data for one restaurant
app.get('/api/restaurants/', function(req, res){
  var queryString = `SELECT * FROM ratings_ambience a
                      JOIN reviewer_info  b ON a.id = b.id`;

  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});

// get all data for one restaurant
app.get('/api/restaurants/:id', function(req, res){
  var queryString = `SELECT * FROM ratings_ambience a
                      JOIN reviewer_info  b ON a.id = b.id
                      WHERE a.id = ?`;

  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});