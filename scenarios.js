const Faker = require('faker');

module.exports = {
  getProductId: (userContext, events, done) => {
    userContext.vars.product_id = Faker.random.number(100000);
    return done();
  },

  getReviewId: (userContext, events, done) => {
    userContext.vars.review_id = Faker.random.number({ min: 9000000, max: 10000000 });
    return done();
  },
};
