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

const genData = () => {
  for (let i = 0; i < 10; i += 1) {
    const obj = {};
    obj.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    obj.id = i;
    obj.description = faker.commerce.productName();
    obj.createdAt = faker.date.past();
    obj.photoUrls = getPhotoUrls();
  }
};


