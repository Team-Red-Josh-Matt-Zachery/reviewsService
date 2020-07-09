const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/reviews';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('db connected'));
//  .catch((err) => console.log('DB Error: ', err));

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'DB connection error: '));

const { Schema } = mongoose;

// let listSchema = new Schema({
//   product_id: Integer,
//   page: Number,
//   count: Number,
//   sort: String,
// })

// let List = mongoose.model('List, listSchema');

const reviewsSchema = new Schema({
  // product_id: Number,
  review_id: Number,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: String,
  body: String,
  date: {
    type: Date,
    default: Date.now,
  },
  reviewer_name: String,
  helpfulness: Number,
  photos: [{ id: String, url: String }],
  // photos: [{
  //   type: Object,
  //   properties: {
  //     id: String,
  //     url: String,
  //   }
  // }],
  name: String,
  email: String,
  characteristics: {
    Size: {
      value: String,
    },
    Width: {
      value: String,
    },
    Comfort: {
      value: String,
    },
  },
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = {
  Reviews,
};
