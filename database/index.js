const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to db');
});

const photoSchema = mongoose.Schema({
  username: String,
  restaurantId: Number,
  description: String,
  createdAt: { type: Date },
  photoUrls: Array,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
