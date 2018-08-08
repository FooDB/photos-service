const express = require('express');
const path = require('path');
const db = require('../database/database.js');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id', express.static('public'));

app.get('/api/restaurant/photos/:restaurantId', (req, res) => {
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

app.post('/api/restaurant', (req, res) => {
  const newRestaurant = {
    username: 'Edward Baeg',
    description: 'This is so yummy',
    createdAt: new Date(),
    photoUrls: ['www.google.com'],
  };

  db.addPhotos(newRestaurant)
    .then(data => {
      res.status(201).send('processed post request');
    })
    .catch(err => {
      res.status(500).send('error', err);
    });

});

app.put('/api/restaurant/:id', (req, res) => {
  const { id } = req.params;
  const update = {
    username: 'Brian So',
    description: 'This was ok',
    createdAt: new Date(),
    photoUrls: ['www.wikipedia.org'],
  };

  db.updatePhotos(id, update, (err) => {
    if (err) {
      res.status(500).send('error', err);
    } else {
      res.status(201).send(`processed put request for id number ${id}`);
    }
  });
});

app.delete('/api/restaurant/:id', (req, res) => {
  const { id } = req.params;
  db.deletePhotos(id, (err) => {
    if (err) {
      res.status(500).send('db error', error);
    } else {
      res.status(204).send(`processed delete request for id number ${id}`);
    }
  });
});

module.exports = app;
