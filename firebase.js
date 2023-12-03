// const { initializeApp, cert } = require('firebase-admin/app');
// const { getFirestore } = require('firebase-admin/firestore');

// const serviceAccount = require('./firebase-creds.json');

// initializeApp({
//   credential: cert(serviceAccount)
// });

// const db = getFirestore();

// module.exports = { db };


// const admin = require('firebase-admin');

// const serviceAccount = require('./firebase-creds.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://(default).firebaseio.com',
//   databaseAuthVariableOverride: null
// });

// const db = admin.database();

// module.exports = { db };



const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./firebase-creds.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db };