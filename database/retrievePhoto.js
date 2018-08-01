const Photo = require('./index.js');

const getPhotos = (id, callback) => {
  Photo.find({ restaurantId: id }, (err, results) => {
    if (err || results[0] === undefined) {
      console.log('ERROR', err);
      const tempErr = err || 404;
      callback(tempErr);
    } else {
      console.log('posted');
      callback(null, results);
    }
  });
};


module.exports = {
  getPhotos,
};
