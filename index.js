const socket = io('//raid-management-service.uc.r.appspot.com');
// const socket = io('//localhost:8080');

const container = document.getElementById('container');
const startButton = document.getElementById('start-chain');
const stopButton = document.getElementById('stop-chain');
const clearButton = document.getElementById('clear-chat');

startButton.addEventListener('click', (event) => {
  // container.replaceChildren();
  // const div = document.createElement('div');
  // div.innerText = 'Starting Complete Heal Chain';
  // container.appendChild(div);

  socket.emit('ch-chain:start', { characters: ['squirrelcat', 'scruff', 'hawgs', 'khromite', 'aspirin']});
});

stopButton.addEventListener('click', (event) => {
  socket.emit('ch-chain:stop', null);

  // const div = document.createElement('div')
  // div.innerText = 'Stopping Complete Heal Chain';
  // container.appendChild(div);
});

clearButton.addEventListener('click', (event) => {
  container.replaceChildren();
});

socket.on('ch-chain:next', (message) => {
  const div = document.createElement('div');
  div.innerText = message;
  container.appendChild(div);
});