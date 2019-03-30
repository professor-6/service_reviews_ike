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
    restaurant_rating : generateRating(5),
    food_rating : generateRating(5),
    service_rating : generateRating(5),
    ambience_rating : generateRating(5),
    value_rating : generateRating(5),
    no_of_reviews : faker.random.boolean(),
    noise_level : generateRating(5),
    percent_recommend :generateRating(100)
  };
  return ratings_ambience;
};

var  data_reviewer_info = function(id){

  var parse_date = function(){
    var date = faker.date.past();
    return date.toISOString().split('T')[0];
  }

  var reviewer_info = {
    restaurant_id : id,
    dined_at : parse_date(),
    reviewer_name : faker.internet.userName(),
    reviewer_city : faker.address.city(),
    no_of_reviews : faker.random.number(),
    reviewer_picture : faker.image.avatar(),
    reviewer_VIP : (faker.random.boolean()).toString()
  };

  return reviewer_info;
};

// console.log(data_reviewer_info());


var data_reviews = function(id0, id1){
  var review = {
    restaurant_id : id0,
    review_id : id1,
    reviews : faker.lorem.sentences(7)
  };
  return review;
};

// console.log(data_reviews(1));


var dataWriteToDisk = function(fileName, callback){

  var dataToStore = [];
  var noOfRestaurants =  100;

  if (fileName === 'reviews') {
    // get 10 reviews per restaurant
    for ( var i = 0; i < 10 ; i++){
      for (var j = 0; j <= noOfRestaurants ; j++) {
        dataToStore.push(callback(j+1, i+1));
      }
    }
  } else {
      for (var i = 1; i <= noOfRestaurants ; i++) {
        dataToStore.push(callback(i));
      }
  }
  fs.writeFile( __dirname + `/${fileName}.json`,
         JSON.stringify(dataToStore), function(err){
    if (err) {
      throw err;
    } else {
      console.log('Data write - SUCCESS');
    }
  })

};

// dataWriteToDisk('ratings_ambience', data_ratings_ambience)
// dataWriteToDisk('reviewer_info', data_reviewer_info)
dataWriteToDisk('reviews', data_reviews);



// fs.readFile( __dirname + '/restaurants_id_name.csv', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//     }
//   console.log(data)
//   })

// const results = [];

// // fs.createReadStream(__dirname + '/restaurants_id_name.csv')
// fs.createReadStream(__dirname + '/reviewer_info.csv')
// .pipe(csv())
// .on('data', (data) =>
//     results.push(data))
//     // console.log(data.id)
//     // console.log(data.name)
// .on('end', () => {
//   console.log(results);
//   // console.log(results[0].id);
//   // console.log(results[0].name);

// });

// reviewer_info.json
// reviews.json
// ratings_ambience.json

var dataReadFromDisk = function(fileName){
  fs.readFile( __dirname + `/${fileName}.json`, (err, data) => {
      if (err) {
        console.error(' ERROR : Cannot read file');
      }
      var  student = JSON.parse(data);
      // console.log(student)
      console.log(student[0]);
      // return JSON.parse(data);
      return student[0];
      // console.log(student[1]);

  })
};

// dataReadFromDisk('reviewer_info');
// reviewer_info.json
// reviews.json
// ratings_ambience.json

module.exports = dataReadFromDisk;





// // table - ratings_ambience
// id
// restaurant_id
// reviews - faker.lorem.paragraph()


// table - ratings_ambience
// id
// restaurant_name
// restaurant_rating -  generateRating(5);
// food_rating -  generateRating(5);
// service_rating -  generateRating(5);
// ambience_rating -  generateRating(5);
// value_rating -  generateRating(5);
// no_of_reviews -  faker.random.boolean()
// noise_level -  generateRating(5);
// percent_recommend - generateRating(100);

// // table - reviewer_info
// id
// restaurant_id
// dined_at - faker.date.past()
// reviewer_name - faker.internet.userName()
// reviewer_city - faker.address.city()
// no_of_reviews -  faker.random.boolean()
// reviewer_picture  - faker.image.avatar()
// reviewer_VIP - faker.random.boolean()
