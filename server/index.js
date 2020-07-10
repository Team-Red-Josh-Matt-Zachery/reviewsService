const express = require('express');
const cors = require('cors');
// const bp = require('body-parser');

const app = express();
// const db = require('../database/index.js');
// const { Review } = require('../database/index');
const { addReview, findAll, updateReview } = require('../database/db');
// const Review = require('../database/index.js');

app.use(cors());
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/reviews/:product_id/list', (req, res) => {
  // const { productId } = req.query;
  // console.log(req.params);
  findAll(req.params.product_id)
    // .then((data) => res.json(data))
    .then((data) => res.send(data))
    .catch((err) => console.log('Backend server Error: ', err));
});

app.get('/products/:product_id', (req, res) => {
  findAll(req.params.product_id)
    .then((data) => res.send(data))
    .catch((err) => console.log('Backend server Error: ', err));
});

app.get('/reviews/:product_id/meta', (req, res) => {
  findAll(req.params.product_id)
    .then((data) => res.send(data))
    .catch((err) => console.log('Backend server Error: ', err));
});

app.post('/reviews/:product_id', (req, res) => {
  // const { productId } = req.query;
  const { product_id } = req.params;
  const {
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    reviewer_name,
    helpfulness,
    photos,
    name,
    email,
    characteristics,
    category,
    default_price,
    description,
    id,
    product_name,
    slogan,
    style_id,
  } = req.body;

  const review = {
    product_id,
    review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    reviewer_name,
    helpfulness,
    photos,
    name,
    email,
    characteristics,
    category,
    default_price,
    description,
    id,
    product_name,
    slogan,
    style_id,
  };
  // console.log(req.params);
  addReview(review)
    .then((data) => res.json(data))
    .catch((err) => console.log('Backend server Error: ', err));
});

app.put('/reviews/helpful/:review_id', (req, res) => {
  updateReview(req.params.review_id, req.body).then((data) => res.send(data));
});

app.put('/reviews/report/:review_id', (req, res) => {
  updateReview(req.params.review_id, req.body).then((data) => res.send(data));
});

app.listen(3004, () => console.log('Backend server listening on port 3004'));
