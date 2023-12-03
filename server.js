const express = require('express');
const app = express();
const path = require('path');
const { db } = require('./firebase.js');

const userRouter = require(path.resolve(__dirname, 'routes', 'users'));

app.set('db', db);

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Healthy');
});

app.listen(3000);