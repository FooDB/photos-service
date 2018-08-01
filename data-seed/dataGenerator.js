const faker = require('faker');
const Photo = require('../database/index.js');

const fillPhotoUrls = () => {
  const photoUrls = [];
  const amazonUrl = [];
  for (let i = 0; i < 50; i += 1) {
    amazonUrl.push(`https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food${i}.jpg`);
  }
  const randomNumber = Math.floor(Math.random() * 100);
  const numberOfPhotos = randomNumber > 8 ? randomNumber : 9;
  for (let i = 0; i <= numberOfPhotos; i += 1) {
    photoUrls.push(amazonUrl[Math.floor(Math.random() * amazonUrl.length)]);
  }
  return photoUrls;
};

const generateData = () => {
  for (let i = 0; i < 100; i += 1) {
    const photoObj = {};
    photoObj.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    photoObj.restaurantId = i;
    photoObj.description = faker.commerce.productName();
    photoObj.createdAt = faker.date.past();
    photoObj.photoUrls = fillPhotoUrls();
    const newPhoto = new Photo(photoObj);
    newPhoto.save((err) => {
      if (err) {
        console.log('ERROR: could not save to database');
      } else {
        console.log('successfully posted');
      }
    });
  }
};

generateData();
