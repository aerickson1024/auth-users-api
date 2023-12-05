const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: '*' }
});
const path = require('path');

// // const { db } = require('./firebase.js');
// // const userRouter = require(path.resolve(__dirname, 'routes', 'users'));

const PORT = process.env.PORT || 8080;

// // app.set('db', db);
// // users IP address can be retrieved from X-Forwarded-For header
// app.set('trust proxy', true);

// // app.use('/users', userRouter);
app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

let chainIntervalRef = null;
io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('ch-chain:start', (data) => {
    let current = 0;
    
    if (chainIntervalRef === null) {
      const msg = 'Starting Complete Heal Chain';
      console.log(msg);

      io.emit('ch-chain:next', msg);
      chainIntervalRef = setInterval(() => {
        console.log(`@${data.characters[current % data.characters.length]} GO NOW!`);
  
        io.emit('ch-chain:next', `@${data.characters[current % data.characters.length]} GO NOW!`);
  
        current++;
      }, 3000);
    } else console.log('=== Chain is already running ===');
  });

  socket.on('ch-chain:stop', () => {
    if (chainIntervalRef) {
      const msg = 'Stopping Complete Heal Chain';
      console.log(msg);

      io.emit('ch-chain:next', msg);
      clearInterval(chainIntervalRef);
      chainIntervalRef = null;
    } else console.log('=== Chain is already stopped ===');
  });
});

server.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });