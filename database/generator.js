const fs = require('fs');
const faker = require('faker');

const numberOfRecords = 10000000;

const seedDatabase = () => {
  const start = new Date().getTime();
  fs.writeFileSync(
    'database/reviewDataIndex.json',
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
      'database/reviewDataIndex.json',
      JSON.stringify(review, null, 2),
      { flag: 'as' },
      (e) => {
        if (e) console.error(e);
      },
    );
    i !== numberOfRecords - 1
      ? fs.writeFileSync('database/reviewDataIndex.json', ',',
        { flag: 'as' },
        (e) => {
          if (e) console.error(e);
        })
      : fs.writeFileSync('database/reviewDataIndex.json', ']',
        { flag: 'as' },
        (e) => {
          if (e) console.error(e);
        });
    if (i % 100000 === 0) console.log(`${i / 100000}%`);
  }
  const stop = new Date().getTime();
  console.log(`Seeding took ${stop - start} milliseconds.`);
};

seedDatabase();
