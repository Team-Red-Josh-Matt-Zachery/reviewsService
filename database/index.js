const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/reviews';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('db connected'));
//  .catch((err) => console.log('DB Error: ', err));

const { Schema } = mongoose;

const reviewsSchema = new Schema({
  results: [
    {
      body: String,
      date: String,
      helpfulness: Number,
      photos: [{ id: Number, url: String }],
      rating: Number,
      recommend: Number,
      response: String,
      review_id: Number,
      name: String,
      summary: String,
    },
  ],
  product_id: Number,
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  photos: [{ id: String, url: String }],
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
  category: String,
  default_price: String,
  description: String,
  id: Number,
  style_name: String,
  slogan: String,
  style_id: Number,
});
// , { versionKey: false }
const Review = mongoose.model('Review', reviewsSchema);

module.exports = {
  Review,
};
