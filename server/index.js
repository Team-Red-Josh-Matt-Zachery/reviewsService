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
    .then((data) => { console.log(data); res.send(data); })
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
    results,
    photos,
    name,
    email,
    characteristics,
    category,
    default_price,
    description,
    id,
    style_name,
    slogan,
    style_id,
  } = req.body;

  const {
    body,
    date,
    helpfulness,
    // photos,
    rating,
    recommend,
    response,
    review_id,
    // name: results[0]: name,
    summary,
  } = results[0];
  // console.log("results", results);
  const review = {
    results: [
      {
        body,
        date,
        helpfulness,
        photos: results[0].photos,
        rating,
        recommend,
        response,
        review_id,
        // { name: req.body.name },
        name: results[0].name,
        summary,
      },
    ],
    product_id,
    photos,
    name,
    email,
    characteristics,
    category,
    default_price,
    description,
    id,
    style_name,
    slogan,
    style_id,
  };
  // console.log(req.body);
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
