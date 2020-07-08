const mongoose = require('mongoose');
const mongoDB = 'mongodb://database/reviews';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('db connected'));
.catch((err) => console.log('DB Error: ', err));

const db = mongoose.connection;

// db.on('error', )

// const Schema = mongoose.Schema;

// let listSchema = new Schema({
//   product_id: Integer,
//   page: Number,
//   count: Number,
//   sort: String,
// })

// let List = mongoose.model('List, listSchema');

let reviewsSchema = new Schema({
  // product_id: Number,
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: String,
  reviewer_name: String,
  helpfulness: Number,
  // photos: [{id: String, url: String}], // [{type: String}]
  // photos: [{
  //   type: Object,
  //   properties: {
  //     id: String,
  //     url: String,
  //   }
  // }],
  name: String,
  email: String,
  characteristics: Object,
  characteristics: {
    type: Object,
    properties: {
      
    }
  },
})

let Reviews = mongoose.model('Reviews, reviewsSchema');

module.exports = {
  Reviews,

}