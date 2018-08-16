const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'foodb' });

const getById = (id) => {
  const query = 'SELECT restaurant_name FROM photos WHERE id=?';
  const params = [id];
  console.log(query);
  client.execute(query, params, { prepare: true })
    .then(result => console.log(result))
    .catch(error => console.log('db error', error));
};

module.exports = {
  getById,
};

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/photos');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', () => {
//   console.log('connected to db');
// });

// const photoSchema = mongoose.Schema({
//   username: String,
//   restaurantId: Number,
//   description: String,
//   createdAt: { type: Date },
//   photoUrls: Array,
// });

// const Photo = mongoose.model('Photo', photoSchema);

// module.exports = Photo;
