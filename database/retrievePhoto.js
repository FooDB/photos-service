const mongoose = require('mongoose');
const Photo = require('./index.js')

let getPhotos = (callback) => {
  Photo.find((err, results) => {
    if(err) {
      console.log('ERR', err);
    } else {
      console.log('posted');
      callback(results);
    }
  })
  .limit(1);
}


module.exports = {
  getPhotos
}