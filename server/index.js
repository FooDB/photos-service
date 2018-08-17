const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id', express.static('public'));

app.get('/api/restaurant/:id/photos', (req, res) => {
  const { id } = req.params;
  db.getById(id)
    .then((data) => {
      const ids = data.rows[0].photo_urls;
      const urls = ids.map(photoId => `https://s3-us-west-1.amazonaws.com/system-design-capstone/${photoId}.jpg`);
      res.status(200).send(urls);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
});

app.post('/api/restaurant/:id/addPhoto', (req, res) => {
  const { id } = req.params;
  const { photoId } = req.body;
  db.addPhoto(id, photoId)
    .then(() => res.status(201).send())
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

// app.post('/api/restaurant/photos', (req, res) => {
//   const newRestaurant = {
//     username: 'Edward Baeg',
//     description: 'This is so yummy',
//     createdAt: new Date(),
//     photoUrls: ['www.google.com'],
//   };

//   db.addPhotos(newRestaurant)
//     .then(data => {
//       res.status(201).send('processed post request');
//     })
//     .catch(err => {
//       res.status(500).send('error', err);
//     });

// });

// app.put('/api/restaurant/:id/photos', (req, res) => {
//   const { id } = req.params;
//   const update = {
//     username: 'Brian So',
//     description: 'This was ok',
//     createdAt: new Date(),
//     photoUrls: ['www.wikipedia.org'],
//   };

//   db.updatePhotos(id, update, (err) => {
//     if (err) {
//       res.status(500).send('error', err);
//     } else {
//       res.status(201).send(`processed put request for id number ${id}`);
//     }
//   });
// });

// app.delete('/api/restaurant/:id/photos', (req, res) => {
//   const { id } = req.params;
//   db.deletePhotos(id, (err) => {
//     if (err) {
//       res.status(500).send('db error', error);
//     } else {
//       res.status(200).send(`processed delete request for id number ${id}`);
//     }
//   });
// });

module.exports = app;
