const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to db');
});

let photoSchema = mongoose.Schema({
  username: String,
  restaurantId: Number,
  description: String,
  createdAt: {type: Date},
  photoUrls: Array
});

let Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;