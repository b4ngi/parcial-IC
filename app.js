const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicación funcionando correctamente');
});

module.exports = app;