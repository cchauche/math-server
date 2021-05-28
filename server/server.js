const express = require('express');
const path = require('path');
const {save, getAll} = require('../models/History.js');
const parseAB = require('./middleware/parseAB.js');

const app = express();
app.use(express.json());

app.use(
  '/hogs',
  express.static(path.resolve(__dirname, '../', 'dist', 'images'))
);

app.get('/history', (req, res) => {
  getAll()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log('Error getting history: ', err);
      res.sendStatus(500);
    });
});

app.post('/math/:operation', parseAB, (req, res) => {
  let answer;
  let { a, b } = req.body;
  let { operation } = req.params;
  if (operation === 'add') {
    answer = a + b;
  } else if (operation === 'subtract') {
    answer = a - b;
  } else if (operation === 'multiply') {
    answer = a * b;
  } else if (operation === 'divide') {
    answer = a / b;
  }
  save(a, b, operation, answer)
    .then(() => {
      res.status(201).json({ answer });
    })
    .catch((err) => {
      console.log('Error saving operation:', err);
      res.sendStatus(500);
    });
});

app.use('/', express.static(path.resolve(__dirname, '../', 'dist', 'client')));

module.exports = app;
