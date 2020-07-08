const express = require('express');
const cors = require('cors');

const app = express();
const db = require('../database/index.js');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
//  /reviews/:product_id/list
// app.get('api/reviews', (req, res) => {
//   const { productId } = req.query;
//   db.findOne(
//     {
//       product_id: productId,
//     },
//   )
//     .then(data => res.json())
//     .catch(err => console.log('Backend server Error: ', err));
// });
// // GET /reviews/:product_id/meta
// app.get('api/reviews', (req, res) => {
//   // const { productId } = req.query;

// });
// // POST /reviews/:product_id
// app.post('api/reviews', (req, res) => {
//   // const { productId } = req.query;

// });
// // PUT /reviews/helpful/:review_id
// app.put('api/reviews', (req, res) => {
//   // const { productId } = req.query;

// });
// // PUT /reviews/report/:review_id
// app.put('api/reviews', (req, res) => {
//   // const { productId } = req.query;

// });

app.listen(3004, () => console.log(`Backend server listening on port 3004`));
