const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Aplicación funcionando correctamente');
});

describe('GET /', () => {
  it('Test funcionando correctamente', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Aplicación funcionando correctamente');
  });
});