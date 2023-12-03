const express = require('express');
const router = express.Router();
// const { collection, getDocs } = require('firebase/firestore');

// const setupDatabaseReference = (database) => {
//   console.log('database connection passed');

//   // console.log(database.collection('users'));
//   const usersRef = database.collection('users');
// }

router.get('/', async (req, res) => {
  const usersRef = req.app.get('db').collection('users');
  const snapshot = await usersRef.get();

  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  
  res.send('hi');
});

router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.post('/', (req, res) => {
  res.send('Create user');
});

router.route('/:id')
  .get((req, res) => {
    console.log(`User: ${req.user.name}`);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

module.exports = router;