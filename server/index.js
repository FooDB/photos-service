const express = require('express');
const path = require('path');
const db = require('../database/dataGenerator.js');


const app = express();

app.use(express.static(path.join(__dirname, "../public")));


app.get('/restaurantId/photos', (req, res) => {
  //SEND A GET REQUEST TO THE DATABASE 
  db.getPhotos((restaurant) => {
    //send back photos
    //res.json();
    res.json(restaurant[0].photoUrls);
  })
});

app.listen(3002, () => console.log('Listening on 3002....'));