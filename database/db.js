// const mongoose = require('mongoose');
const { Review } = require('./index.js');

const addReview = (reviewObject) => {
  const newReview = new Review(reviewObject);
  return newReview
    // .insertMany()
    .save()
    .then((data) => data)
    .catch((err) => console.log('err', err));
};

const findAllReviews = (productId) => (
  Review.find({ product_id: productId })
    .then((data) => data)
    .catch((err) => console.log('err', err))
);

const updateReview = (_id, reviewObject) => (
  Review.updateOne({ _id }, reviewObject)
    .then((data) => data)
);

const deleteReview = (reviewId) => (
  Review.deleteOne({ _id: reviewId })
    .then((res) => res)
);

module.exports = {
  addReview, findAllReviews, updateReview, deleteReview,
};
