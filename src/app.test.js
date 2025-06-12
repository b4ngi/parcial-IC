const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('la respuesta debería tener más de 15 caracteres', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text.length).toBeGreaterThan(15);
  });
});