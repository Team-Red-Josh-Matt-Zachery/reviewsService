const Faker = require('faker');

const getProductId = (userContext, events, done) => {
  userContext.vars.product_id = Faker.random.number(100000);
  return done();
  // const product_id = Faker.random.number(100000);
  // return product_id;
};

const getReviewId = (userContext, events, done) => {
  userContext.vars.review_id = Faker.random.number({ min: 9000000, max: 10000000 });
  return done();
  // const review_id = Faker.random.number({ min: 9000000, max: 10000000 });
  // return review_id;
};

module.exports = {
  getProductId,
  getReviewId,
};
