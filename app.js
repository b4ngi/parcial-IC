const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicación funcionando exitosamente.');
});

module.exports = app;