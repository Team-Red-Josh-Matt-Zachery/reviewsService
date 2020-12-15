// require('newrelic');
const express = require('express');
const cors = require('cors');

const PORT = 3004;
const app = express();
const { addReview, findAll, updateReview } = require('../database/controller');
// const Review = require('../database/index.js');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/reviews/:product_id/list', (req, res) => {
  // const { productId } = req.query;
  const allReviews = {
    results: '',
  };
  findAll(req.params.product_id)
    .then((data) => allReviews.results = data)
    .then(() => res.send(allReviews))
});
// try {
//   allReviews.results = res;
//   res.send(allReviews);
// } catch (e) {
//   res.status(500).send('Back-end server Error: ', e);
// }
// });

app.get('/products/:product_id', async (req, res) => {
  const findProduct = await findAll(req.params.product_id);
  // .then((data) => res.send(data))
  try {
    res.status(200).send(findProduct);
  } catch (e) {
    res.status(500).send('Back-end server Error: ', e);
  }
});

app.get('/reviews/:product_id/meta', async (req, res) => {
  const findMeta = await findAll(req.params.product_id);
  // .then((data) => res.send(data))
  try {
    res.status(200).send(findMeta);
  } catch (e) {
    res.status(500).send('Back-end server Error: ', e);
  }
});

app.post('/reviews/:product_id', async (req, res) => {
  // const { productId } = req.query;
  const { product_id } = req.params;
  const {
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    response,
    review_id,
    reviewer_name,
    summary,
    characteristics,
  } = req.body;
  // console.log("results", results);
  const review = {
    body,
    date,
    helpfulness,
    photos,
    rating,
    recommend,
    response,
    review_id,
    reviewer_name,
    summary,
    characteristics,
    product_id,
  };
  // console.log(req.body);
  const saveReview = await addReview(review);
  // .then((data) => res.json(data))
  try {
    res.status(201).send(saveReview);
  } catch (e) {
    res.status(500).send('Back-end server Error: ', e);
  }
});

app.put('/reviews/helpful/:review_id', (req, res) => {
  // const helpful = await updateReview(req.params.review_id, req.body);
  updateReview(req.params.review_id, req.body)
    .then((data) => res.send(data))
    .catch((e) => res.send(e));
  // try {
  //   res.status(204).send(helpful);
  // } catch (e) {
  //   res.status(500).send('Back-end server Error: ', e);
  // }
});

app.put('/reviews/report/:review_id', async (req, res) => {
  const report = updateReview(req.params.review_id, req.body);
  // .then((data) => res.send(data));
  try {
    res.send(report);
  } catch (e) {
    res.status(500).send('Back-end server Error: ', e);
  }
});

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`));
