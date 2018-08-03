const express = require('express');
const path = require('path');
const db = require('../database/retrievePhoto.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});
app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id', express.static('public'));

app.get('/restaurant/photos/:restaurantId', (req, res) => {
  const id = Number(req.params.restaurantId);
  db.getPhotos(id, (err, restaurant) => {
    if (err) {
      if (err === 404) {
        res.status(404).send('Not Found');
      } else {
        res.status(500).send('ERR', err);
      }
    } else {
      res.send(restaurant[0].photoUrls);
    }
  });
});

module.exports = app;
