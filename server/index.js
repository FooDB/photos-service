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
  if (id > 0 && id < 100) {
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
  }
});

// add a post request
app.post('/restaurant', (req, res) => {
  res.send('processed post request');
});

// add a put request
app.put('/restaurant/:id', (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;
  res.send(`processed put request for id number ${id}`);
});

// add a delete request
app.delete('restaurant/:id', (req, res) => {
  const { id } = req.params;
  res.send(`processed delete request for id number ${id}`);
});

module.exports = app;
