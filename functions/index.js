const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//    helloWorld = name of function

exports.helloWorld = functions.https.onRequest((request, response) => {
  let data = [];
  db.collection('quiz')
    .get()
    .then(result => {
      result.forEach(doc => {
        data.push(doc.data());
      });

      response.json(data);
      response.send();
      return data;
    })
    .catch();
  // let data = {
  //   name: 'John Doe',
  //   age: 90,
  //   isMember: true
  // };
});
