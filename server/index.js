const express = require('express');
const path = require('path');
const db = require('../database/retrievePhoto.js')
const app = express();

app.use(express.static(path.join(__dirname, "../public")));


app.get('/restaurantId/photos', (req, res) => {
  db.getPhotos((restaurant) => {
    res.json(restaurant[0].photoUrls);
  })
});

app.listen(3002, () => console.log('Listening on 3002....'));
