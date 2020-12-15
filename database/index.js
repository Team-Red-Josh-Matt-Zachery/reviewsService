const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/reviews';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch((e) => console.error('Database connection Error: ', e));

mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;

const reviewsSchema = new Schema({
  body: String,
  date: Date,
  helpfulness: Number,
  photos: [{ id: Number, url: String }],
  rating: Number,
  recommend: Number,
  response: String,
  review_id: { type: Number, index: true },
  summary: String,
  product_id: { type: Number, index: true },
  characteristics: {
    Size: {
      id: Number,
      value: String,
    },
    Width: {
      id: Number,
      value: String,
    },
    Comfort: {
      id: Number,
      value: String,
    },
    Fit: {
      id: Number,
      value: String,
    },
    Length: {
      id: Number,
      value: String,
    },
    Quality: {
      id: Number,
      value: String,
    },
  },
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = {
  Review,
};
