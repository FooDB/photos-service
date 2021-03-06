require('newrelic');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const redis = require('redis');
const cluster = require('cluster');
const cpuCount = require('os').cpus().length;

const db = require('../database/index.js');

const app = express();

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const app = express();
  app.use(bodyParser.json());

  const client = redis.createClient();
  client.on('error', err => console.log('Redis error', err));
  client.on('connect', () => console.log('Redis client connected...'));

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
    client.get(id, (error, result) => {
      if (error) console.log('Redis error', error);
      if (result) {
        res.status(200).send(result);
      } else {
        db.getById(id)
          .then((data) => {
            const ids = data.rows[0].photo_urls;
            const urls = ids.map(photoId => `https://s3-us-west-1.amazonaws.com/system-design-capstone/${photoId}.jpg`);
            res.status(200).send(urls);
            client.set(id, JSON.stringify(urls));
          })
          .catch((err) => {
            console.log(err);
            res.status(404).send(err);
          });
      }
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

  app.post('/api/restaurant/photos', (req, res) => {
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

  app.put('/api/restaurant/:id/photos', (req, res) => {
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

  app.delete('/api/restaurant/:id/photos', (req, res) => {
    const { id } = req.params;
    db.deletePhotos(id, (err) => {
      if (err) {
        res.status(500).send('db error', err);
      } else {
        res.status(200).send(`processed delete request for id number ${id}`);
      }
    });
  });

  const port = 3002;
  app.listen(port, () => console.log(`Listening to port ${port}...`));
}

module.exports = app;
