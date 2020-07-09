const express = require('express');
const cors = require('cors');

const app = express();
const db = require('../database/index.js');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
//  /reviews/:product_id/list
// app.get('/reviews/:product_id/list', (req, res) => {
//   const { productId } = req.query;
//   db.find(
//     {
//       product_id: productId,
//     },
//   )
//     .then((data) => res.json(data))
//     .catch((err) => console.log('Backend server Error: ', err));
// });
// // GET /reviews/:product_id/list
// app.get('/reviews/:product_id/list', (req, res) => {
//   // const { productId } = req.query;

// });
// // POST /reviews/:product_id
// app.post('api/reviews', (req, res) => {
//   // const { productId } = req.query;

// });
// // PUT /reviews/helpful/:review_id
// app.put('api/reviews', (req, res) => {


// });
// // PUT /reviews/report/:review_id
// app.put('api/reviews', (req, res) => {


// });

app.listen(3004, () => console.log(`Backend server listening on port 3004`));
