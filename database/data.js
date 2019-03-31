var faker = require('faker');
var csv = require('csv-parser');
var fs = require('fs');

//set seed
faker.seed(123);

var generateRating = function(max){
  // return random Number between 0 and max
  var randomNum = parseInt(Math.random() * max)
  return randomNum;
};

// generate data
var data_ratings_ambience = function(){
  var ratings_ambience = {
    restaurant_name : '',
    restaurant_rating : faker.random.number({"min" : 0, "max" : 5}),
    food_rating : faker.random.number({"min" : 0, "max" : 5}),
    service_rating : faker.random.number({"min" : 0, "max" : 5}),
    ambience_rating : faker.random.number({"min" : 0, "max" : 5}),
    value_rating : faker.random.number({"min" : 0, "max" : 5}),
    no_of_reviews : faker.random.number({"min" :1, "max" : 1000}),
    noise_level : faker.random.number({"min" : 0, "max" : 5}),
    percent_recommend : faker.random.number({"min" : 0, "max" : 100}),
  };
  return ratings_ambience;
};

var  data_reviewer_info = function(){

  var parse_date = function(){
    var date = faker.date.past();
    return date.toISOString().split('T')[0];
  }

  var reviewer_info = {
    dined_at : parse_date(),
    reviewer_name : faker.internet.userName(),
    reviewer_city : faker.address.city(),
    no_of_reviews : faker.random.number({"min" : 5, "max" : 1000}),
    reviewer_picture : faker.image.avatar(),
    reviewer_VIP : (faker.random.boolean()).toString()
  };

  return reviewer_info;
};


var data_reviews = function(id0, id1){
  var review = {
    restaurant_id : id0,
    review_id : id1,
    reviews : faker.lorem.sentences(7)
  };
  return review;
};


var dataWriteToDisk = function(fileName, callback){

  var dataToStore = [];
  var noOfRestaurants =  100;

  if (fileName === 'reviews') {
    // get 10 reviews per restaurant
    for ( var i = 0; i < 10 ; i++){
      for (var j = 0; j < noOfRestaurants ; j++) {
        dataToStore.push(callback(j+1, i+1));
      }
    }
  } else {
      for (var i = 1; i <= noOfRestaurants ; i++) {
        dataToStore.push(callback());
      }
  }
  fs.writeFile( __dirname + `/data/${fileName}.json`,
         JSON.stringify(dataToStore), function(err){
    if (err) {
      throw err;
    } else {
      console.log(`SUCCESS : File /data/${fileName}.json created`);
    }
  })

};

dataWriteToDisk('ratings_ambience', data_ratings_ambience)
dataWriteToDisk('reviewer_info', data_reviewer_info)
dataWriteToDisk('reviews', data_reviews);

