const mongoose = require('mongoose');
const faker = require('faker');


mongoose.connect('mongodb://localhost/photos');

const generateData = () => {

  let photoSchema = mongoose.Schema({
    username: String,
    restaurantId: Number,
    description: String,
    createdAt: {type: Date},
    photo: String
  });

  let Photo = mongoose.model('Photo', photoSchema);

  for (let i = 0; i < 100; i++) {
    let photoObj = {};
  
    photoObj.username = `${faker.name.firstName()} ${faker.name.lastName()}`;
    photoObj.restaurantId = i;
    photoObj.description = faker.commerce.productName();
    photoObj.createdAt = faker.date.past();
    photoObj.photo = faker.image.food();
  
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