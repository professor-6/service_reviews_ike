const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path  = require('path');
const db = require('../database/db');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, function(){
  console.log(`Listening on port : ${PORT}`);
})


// get a record from table::ratings_ambience
app.get('/ratings_ambience/:id', function(req, res){
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

// get all data for one restaurant
app.get('/reviews/:id', function(req, res){
  var queryString = `SELECT * FROM ratings_ambience a
                      JOIN reviews b ON b.restaurant_id = a.id
                      WHERE b.restaurant_id = ?`;

  db.query(queryString, req.params.id, function (err, results){
    if (err){
      console.error('ERROR : Could not seed database');
      throw err;
    }
    console.log(`SUCCESS : Retrieved records from  database : opentable `)
    res.send(results);
  });
});

// fallback route
app.get('/:id', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

// default route - redirect to /:id
function handleRedirect(req, res) {
  var redirectURL = "http://localhost:3002/1";
  res.redirect(redirectURL);
}
app.get('*', handleRedirect);


//========= FILTERS =================
 // newest
  var queryString = `SELECT * FROM ratings_ambience a
                      JOIN reviews b ON b.restaurant_id = a.id
                      WHERE b.restaurant_id = ?
                      ORDER BY dined_at DESC;`;

// hightest rating
 var queryString = `SELECT * FROM ratings_ambience a
                      JOIN reviews b ON b.restaurant_id = a.id
                      WHERE b.restaurant_id = ?
                      ORDER BY overall_rating DESC;`;

// lowest rating
var queryString = `SELECT * FROM ratings_ambience a
                    JOIN reviews b ON b.restaurant_id = a.id
                    WHERE b.restaurant_id = ?
                    ORDER BY overall_rating ASC;`;


