const { Review } = require('./index.js');

const addReview = (reviewObject) => {
  const newReview = new Review(reviewObject);
  return newReview
    .save()
    .then((data) => data)
    .catch((e) => console.error(e));
};

const findAll = (productId) => (
  Review
    .find({ product_id: productId }, null, { limit: 10 })
    .then((data) => data)
    .catch((e) => console.error(e))
);

const updateReview = (id, reviewObject = { helpfulness: 1 }) => (
  Review
    .updateOne({ review_id: id }, reviewObject)
    .then((data) => data)
    .catch((e) => console.error(e))
);

const deleteReview = (reviewId) => (
  Review
    .deleteOne({ _id: reviewId })
    .then((data) => data)
    .catch((e) => console.error(e))
);

module.exports = {
  addReview, findAll, updateReview, deleteReview,
};
