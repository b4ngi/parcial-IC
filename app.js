const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicación funcionando correctamente1');
});

module.exports = app;