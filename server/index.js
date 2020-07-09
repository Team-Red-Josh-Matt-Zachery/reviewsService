const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();
const db = require('../database/index.js');
// const Reviews = require('../database/index.js');

app.use(cors());
app.use(bp.json());
// app.use(express.json());
app.use(express.static('public'));
//  /reviews/:product_id/list
app.get('/reviews', (req, res) => {
  // const { productId } = req.query;
  console.log(req.body);
  db.Reviews.find()
    .then((data) => res.json(data))
    .catch((err) => console.log('Backend server Error: ', err));
});
// // GET /reviews/:product_id/list
// app.get('/reviews/:product_id/list', (req, res) => {
//   // const { productId } = req.query;

// });
// // POST /reviews/:product_id
app.post('/reviews', (req, res) => {
  // const { productId } = req.query;
  const review = {
    reviewer_name: req.body.reviewer_name,
    summary: req.body.summary,
    body: req.body.body,
    rating: req.body.rating,
  };
  console.log(review);
  db.Reviews.create(review)
    .then((data) => res.json(data))
    .catch((err) => console.log('Backend server Error: ', err));
});
// // PUT /reviews/helpful/:review_id
// app.put('api/reviews', (req, res) => {

// });
// // PUT /reviews/report/:review_id
// app.put('api/reviews', (req, res) => {

// });

app.listen(3004, () => console.log('Backend server listening on port 3004'));
