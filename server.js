const express = require('express');
const app = express();
const path = require('path');
const { db } = require('./firebase.js');

const userRouter = require(path.resolve(__dirname, 'routes', 'users'));

// console.log(db);

app.set('db', db);

app.use('/users', userRouter);

app.get('/', (req, res) => {
  // console.log(req.app.get('db'));
  res.send('Healthy');
});

app.listen(3000);