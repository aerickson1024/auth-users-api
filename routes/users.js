const express = require('express');
const router = express.Router();

// const getCollectionSnapshot = async (req, collection) => {
//   const ref = req.app.get('db').collection(collection);
//   return await ref.get();
// }

router.route('/')
  .get((req, res) => {
    // const snapshot = await getCollectionSnapshot(req, 'users')

    // let users = [];
    // snapshot.forEach(doc => {
    //   const { username, password } = doc.data();
    //   users.push({
    //     username: username,
    //     password: password
    //   });
    //   // console.log(`Username: ${username}`);
    //   // console.log(`Password: ${password}`);
    // });

    const users = [{
      username: 'user1'
    }, {
      username: 'user2'
    }];
    
    res.json(users);
  })
  .post((req, res) => {
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