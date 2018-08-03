const mongoose = require('mongoose');
const faker = require('faker');
const Photo = require('../database/index.js');

class DataGenerator {
  constructor() {
    this.data = [];
  }

  fillPhotoUrls() {
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
  }

  generateData() {
    for (let i = 0; i < 100; i += 1) {
      const photoObj = {};
      photoObj.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
      photoObj.restaurantId = i;
      photoObj.description = faker.commerce.productName();
      photoObj.createdAt = faker.date.past();
      photoObj.photoUrls = this.fillPhotoUrls();
      const newPhoto = new Photo(photoObj);
      const temp = newPhoto.save();
      this.data.push(temp);
    }
    Promise.all(this.data)
      .then((results) => {
        console.log('complete data seeding', results);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        mongoose.connection.close(() => {
          process.exit(0);
        });
      });

    return this.data;
  }
}

const db = new DataGenerator();
db.generateData();
