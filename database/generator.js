// const fs = require('fs');
const faker = require('faker');
// const argv = require('yargs');
// const lines = argv.lines || 1000;
// const filename = argv.output || 'reviewData.csv';
// const stream = fs.createWriteStream(filename);

const mongoose = require('mongoose');
const Review = require('./index');

mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createReview = () => {
  const body = faker.hacker.phrase();
  const date = faker.date.recent();
  const helpfulness = faker.random.number({ max: 10 });
  const photos = [];
  for (let i = 0; i < faker.random.number({ max: 8 }); i++) {
    photos.photo(faker.image.imageUrl()[i]);
  }
  const id = faker.random.number(4);
  const url = faker.image.imageUrl();
  // }];
  const rating = faker.random.number({ max: 5 });
  const recommend = faker.random.number({ max: 1 });
  const response = faker.hacker.phrase();
  const review_id = faker.random.number(100);
  const reviewer_name = faker.name.firstName();
  const summary = faker.hacker.phrase();

  const results = {
    body: faker.hacker.phrase(),
    date: faker.date.recent(),
    helpfulness: faker.random.number({ max: 10 }),
    photos: [{ id: faker.random.number(4), url: faker.image.imageUrl() }],
    rating: faker.random.number({ max: 5 }),
    recommend: faker.random.number({ max: 1 }),
    response: faker.hacker.phrase(),
    review_id: faker.random.number(100),
    reviewer_name: faker.name.firstName(),
    summary: faker.hacker.phrase(),
  };
  const product_id = 0;
  const ratings = {
    0: faker.random.number({ max: 30 }),
    1: faker.random.number({ max: 30 }),
    2: faker.random.number({ max: 30 }),
    3: faker.random.number({ max: 30 }),
    4: faker.random.number({ max: 30 }),
    5: faker.random.number({ max: 30 }),
  };
  const characteristics = {
    Size: {
      id: faker.random.number(2),
      value: faker.random.number({ max: 5 }),
    },
    Width: {
      id: faker.random.number(2),
      value: faker.random.number({ max: 5 }),
    },
    Comfort: {
      id: faker.random.number(2),
      value: faker.random.number({ max: 5 }),
    },
  };
  // ${review_id},${body},${date},${helpfulness},${photos},
  // ${rating},${recommend},${response},${reviewer_name},${summary},
  return `${review_id},${body},${date},${helpfulness},${photos},
${rating},${recommend},${response},${reviewer_name},${summary},${product_id},${ratings},${characteristics},\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    const canWrite = true;
    do {
      i--;
      const post = createPost();
      // check if i === 0 so we would write and call 'done'
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  // initiate our writing function
  writing();
};

// write our 'header' line before we invoke the loop
stream.write('review_id, product_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary, ratings, characteristics\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});

const review = [
  new Review({
    results: {
      body: faker.hacker.phrase(),
      date: faker.date.recent(),
      helpfulness: faker.random.number({ max: 10 }),
      photos: [{ id: faker.random.number(4), url: faker.image.imageUrl() }],
      rating: faker.random.number({ max: 5 }),
      recommend: faker.random.number({ max: 1 }),
      response: faker.hacker.phrase(),
      review_id: faker.random.number(100),
      reviewer_name: faker.name.firstName(),
      summary: faker.hacker.phrase(),
    },
    product_id: faker.random.number(100),
    ratings: {
      0: faker.random.number({ max: 30 }),
      1: faker.random.number({ max: 30 }),
      2: faker.random.number({ max: 30 }),
      3: faker.random.number({ max: 30 }),
      4: faker.random.number({ max: 30 }),
      5: faker.random.number({ max: 30 }),
    },
    characteristics: {
      Size: {
        id: faker.random.number(2),
        value: faker.random.number({ max: 5 }),
      },
      Width: {
        id: faker.random.number(2),
        value: faker.random.number({ max: 5 }),
      },
      Comfort: {
        id: faker.random.number(2),
        value: faker.random.number({ max: 5 }),
      },
    },
  }),
];

const numberOfRecords = 10;

const seed = () => {
  const t0 = new Date();
  let i = 0;
  while (i < numberOfRecords) {
    const document = createReview();
    const newReview = new Review(document);
    newReview.save();
    i++;
  }
  const t1 = new Date();
  console.log(`Seeding took ${t1 - t0} milliseconds.`);
};

seed();

// const exit = () => {
//   mongoose.disconnect();
// };

// while (review_id <= 10000000)
// create a product
// For (0 - 30 iterations)
// create a review with review_id and increment review_id
// for (2 - 7 iterations)
// create photos for that review
// Increment product_id
