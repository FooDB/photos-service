const mongoose = require('mongoose');
const faker = require('faker');


mongoose.connect('mongodb://localhost/photos');

const fillPhotoUrls = () => {

  let photoUrls = [];
  
  let amazonUrl = [];
  
  for (let i = 0; i < 50; i++) {
    amazonUrl.push(`https://s3-us-west-1.amazonaws.com/fec5-restaurant-photos/food${i}.jpg`);
  }
  
  let numberOfPhotos = Math.floor(Math.random() * 100);
    
  for (let i = 0; i <= numberOfPhotos; i++) {
    photoUrls.push(amazonUrl[Math.floor(Math.random() * amazonUrl.length)]);
  }

  return photoUrls;
}

const generateData = () => {

  let photoSchema = mongoose.Schema({
    username: String,
    restaurantId: Number,
    description: String,
    createdAt: {type: Date},
    photoUrls: Array
  });

  let Photo = mongoose.model('Photo', photoSchema);

  for (let i = 0; i < 100; i++) {
    let photoObj = {};
  
    photoObj.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    photoObj.restaurantId = i;
    photoObj.description = faker.commerce.productName();
    photoObj.createdAt = faker.date.past();
    photoObj.photoUrls = fillPhotoUrls();
  
    let newPhoto = new Photo(photoObj);
    newPhoto.save((err) => {
      if(err) {
        console.log('ERROR: could not save to database');
      } else {
        console.log('successfully posted');
      }
    })
  };
}

generateData();