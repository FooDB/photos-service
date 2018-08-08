const faker = require('faker');
const fs = require('fs');
// const db = require('../database/index.js');

const promises = [];

const getPhotoUrls = () => {
  const amazonUrls = [];
  for (let i = 0; i < 50; i += 1) {
    amazonUrls.push(`https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food${i}.jpg`);
  }

  const photoUrls = [];
  const numPics = Math.floor(Math.random() * 50) + 8;
  for (let i = 0; i <= numPics; i += 1) {
    photoUrls.push(amazonUrls[Math.floor(Math.random() * amazonUrls.length)]);
  }
  return photoUrls;
};

const NUMBER_OF_RECORDS = 10000000;

const genData = () => {
  let str = `id \t username \t description \t createdAt \t photoUrls \n`;
  for (let i = 1; i < NUMBER_OF_RECORDS; i += 1) {
    // let row = 'hi';
    // let row = `1 \t Winnifred Cremin \t Rustic Steel Chair \t Tue Mar 27 2018 22:33:33 GMT-0700 (PDT) \t ["https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food26.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food40.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food23.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food31.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food21.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food8.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food41.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food12.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food11.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food32.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food39.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food39.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food13.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food37.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food39.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food43.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food22.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food49.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food36.jpg","https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food21.jpg"]`;
    let row = '';
    row += i + '\t';
    row += `${faker.name.firstName()} ${faker.name.lastName()}` + '\t';
    // row += faker.commerce.productName() + '\t';
    // row += faker.date.past() + '\t';
    // row += JSON.stringify(getPhotoUrls()) + '\n';
    str += row + '\n';
    if (i % 1000 === 0) console.log(i);
  }
  return str;
};

let fileString = genData();

console.log('done generating data');

fs.writeFile('./database/data.tsv', fileString, (err) => {
  if (err) {
    console.log('fs write error', err);
  } else {
    console.log('data written to data.tsv');
  }
});
