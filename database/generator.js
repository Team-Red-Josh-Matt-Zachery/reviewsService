const fs = require('fs');
const faker = require('faker');
// const argv = require('yargs');
// const lines = argv.lines || 1000;
// const filename = argv.output || 'reviewData.csv';
// const filename = 'reviewsData.json';
// const stream = fs.createWriteStream(filename);
// const mongoose = require('mongoose');
// const stream = require('stream');

// const write = (data, callback) => {
//   !stream.write(data)
//     ? stream.once('drain', callback)
//     : process.nextTick(callback);
// };

// write('hello', () => {
//   console.log('Write completed, do more writes now.');
// });

const numberOfRecords = 100000;

const seedDatabase = (done) => {
  const t0 = new Date();
  fs.writeFileSync(
    'database/reviewData.json',
    '[',
    (e) => {
      if (e) console.error(e);
    },
  );

  for (let i = 0; i < numberOfRecords; i++) {
    const photosArray = [];
    for (let j = 0; j < faker.random.number({ max: 9 }); j++) {
      photosArray.push({
        id: faker.random.number(1000),
        url: `${faker.image.imageUrl(
          400,
          400,
          'fashion',
        )}?random=${Date.now()}`,
      });
    }
    const review = {
      review_id: i,
      body: faker.hacker.phrase(),
      date: faker.date.recent(),
      helpfulness: faker.random.number({ max: 10 }),
      photos: photosArray,
      rating: faker.random.number({ max: 5 }),
      recommend: faker.random.number({ max: 1 }),
      response: faker.hacker.phrase(),
      reviewer_name: faker.name.firstName(),
      summary: faker.hacker.phrase(),
      product_id: faker.random.number(100000),
      ratings: {
        0: faker.random.number({ max: 30 }),
        1: faker.random.number({ max: 30 }),
        2: faker.random.number({ max: 30 }),
        3: faker.random.number({ max: 30 }),
        4: faker.random.number({ max: 30 }),
        5: faker.random.number({ max: 30 }),
      },
      recommended: {
        0: faker.random.number({ max: 30 }),
        1: faker.random.number({ max: 30 }),
      },
      characteristics: {
        Size: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
        Width: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
        Comfort: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
        Fit: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
        Length: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
        Quality: {
          id: faker.random.number(20),
          value: faker.random.number({ max: 5 }),
        },
      },
    };
    fs.writeFileSync(
      'database/reviewData.json',
      JSON.stringify(review, null, 2),
      { flag: 'as' },
      (e) => {
        if (e) console.error(e);
      },
    );
    i !== numberOfRecords - 1
      ? fs.writeFileSync('database/reviewData.json', ',',
          { flag: 'as' },
          (e) => {
            if (e) console.error(e);
          },
        )
      : fs.writeFileSync('database/reviewData.json', ']',
          { flag: 'as' },
          (e) => {
          if (e) console.error(e);
          },
        );
    if (i % 10000 === 0) console.log(`${i / 10000}%`);
  }
  const t1 = new Date();
  console.log(`Seeding took ${t1 - t0} milliseconds.`);
};

seedDatabase();

// const seedDatabase = (done) => {
//   const data = [];
//   const t0 = new Date();
//   for (let i = 0; i < numberOfRecords; i++) {
//     const photosArray = [];
//     for (let j = 0; j < faker.random.number({ max: 9 }); j++) {
//       photosArray.push({
//         id: faker.random.number(1000),
//         url: `${faker.image.imageUrl(
//           400,
//           400,
//           'fashion',
//         )}?random=${Date.now()}`,
//       });
//     }
//     const review = {
//       review_id: i, // faker.random.number(100)
//       body: faker.hacker.phrase(),
//       date: faker.date.recent(),
//       helpfulness: faker.random.number({ max: 10 }),
//       photos: photosArray,
//       rating: faker.random.number({ max: 5 }),
//       recommend: faker.random.number({ max: 1 }),
//       response: faker.hacker.phrase(),
//       reviewer_name: faker.name.firstName(),
//       summary: faker.hacker.phrase(),
//       product_id: faker.random.number(100000),
//       ratings: {
//         0: faker.random.number({ max: 30 }),
//         1: faker.random.number({ max: 30 }),
//         2: faker.random.number({ max: 30 }),
//         3: faker.random.number({ max: 30 }),
//         4: faker.random.number({ max: 30 }),
//         5: faker.random.number({ max: 30 }),
//       },
//       recommended: {
//         0: faker.random.number({ max: 30 }),
//         1: faker.random.number({ max: 30 }),
//       },
//       characteristics: {
//         Size: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//         Width: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//         Comfort: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//         Fit: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//         Length: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//         Quality: {
//           id: faker.random.number(20),
//           value: faker.random.number({ max: 5 }),
//         },
//       },
//     };
//     data.push(review);
//     if (i % 10000 === 0) console.log(`${i / 10000}%`);
//   }
//   fs.writeFileSync(
//     'database/reviewData.json',
//     JSON.stringify(data, null, 2),
//     { flag: 'as' },
//     (e) => {
//       if (e) console.error(e);
//     },
//   );
//   const t1 = new Date();
//   console.log(`Seeding took ${t1 - t0} milliseconds.`);
// };

// seedDatabase();

// Write the data to the supplied writable stream one million times.
// Be attentive to back-pressure.
// function writeOneMillionTimes(writer, data, encoding, callback) {
//   let i = 1000000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // Last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // Had to stop early!
//       // Write some more once it drains.
//       writer.once('drain', write);
//     }
//   }
// }

// };
// const startWriting = (writeStream, encoding, done) => {
//   let i = lines;
//   function writing() {
//     const canWrite = true;
//     do {
//       i--;
//       const post = createPost();
//       // check if i === 0 so we would write and call 'done'
//       if (i === 0) {
//         // we are done so fire callback
//         writeStream.write(post, encoding, done);
//       } else {
//         // we are not done so don't fire callback
//         writeStream.write(post, encoding);
//       }
//       // else call write and continue looping
//     } while (i > 0 && canWrite);
//     if (i > 0 && !canWrite) {
//       // our buffer for stream filled and need to wait for drain
//       // Write some more once it drains.
//       writeStream.once('drain', writing);
//     }
//   }
//   // initiate our writing function
//   writing();

// // write our 'header' line before we invoke the loop
// stream.write('review_id, product_id, body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary, ratings, characteristics\n', 'utf-8');
// // invoke startWriting and pass callback
// startWriting(stream, 'utf-8', () => {
//   stream.end();
// });
