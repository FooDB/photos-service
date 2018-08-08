const Photo = require('./index.js');

const getPhotos = (id, callback) => {
  Photo.find({ restaurantId: id }, (err, results) => {
    if (err || results[0] === undefined) {
      console.log('ERROR db find', err);
      const tempErr = err || 404;
      callback(tempErr);
    } else {
      console.log('posted');
      callback(null, results);
    }
  });
};

const addPhotos = (obj) => {
  obj.restaurantId = 200;
  const doc = new Photo(obj);
  return doc.save(obj);
};


module.exports = {
  getPhotos,
  addPhotos,
};
