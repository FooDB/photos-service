
const request = require('supertest');
const app = require('../server/index.js');

describe('Test the room path', () => {
  test('should response to GET method', () => {
    return request(app).get('/restaurantId/photos').then((response) => { 
      expect(response.statusCode).toBe(200);
    }).catch((err) => {
      return done(err);
    });
  });
});

