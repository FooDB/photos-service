const request = require('supertest');
const app = require('../server/index.js');

describe('GET /restaurant/photos/:id', () => {
  test('should respond with status code 200', () => {
    return request(app)
      .get('/restaurant/photos/5')
      .expect(200);
  });

  test('should return an array of photos', () => {
    return request(app)
      .get('/restaurant/photos/5')
      .expect(200)
      .expect((res) =>{ 
        expect(res.body.length).toEqual(10);
      });
  });

  test('should respond with status code 404  for invalid id', () => {
    return request(app)
      .get('/restaurant/photos/200')
      .expect(404);
  });
});
