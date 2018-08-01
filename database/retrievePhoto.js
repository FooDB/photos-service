const Photo = require('./index.js');

const getPhotos = (id, callback) => {
  Photo.find({ restaurantId: id }, (err, results) => {
    if (err) {
      console.log('ERROR', err);
      callback(err);
    } else {
      console.log('posted');
      callback(null, results);
    }
  });
};


module.exports = {
  getPhotos,
};
