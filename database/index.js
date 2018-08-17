const { Client } = require('cassandra-driver');

const client = new Client({ contactPoints: ['127.0.0.1'], keyspace: 'foodb' });

const getById = (id) => {
  const query = 'SELECT photo_urls FROM photos WHERE id=?';
  const params = [id];
  return client.execute(query, params, { prepare: true });
};

module.exports = {
  getById,
};
