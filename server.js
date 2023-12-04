const express = require('express');
const app = express();
const path = require('path');
// const { db } = require('./firebase.js');
const userRouter = require(path.resolve(__dirname, 'routes', 'users'));

const PORT = process.env.PORT || 8080;

// app.set('db', db);
// users IP address can be retrieved from X-Forwarded-For header
app.set('trust proxy', true);

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Healthy');
});

app.listen(PORT, () => { console.log(`Server is listening on PORT ${PORT}`)});