const firebase = require ('firebase')

const config = {
  apiKey: 'AIzaSyAtexJssTqaidIpfZ4Q7-VITINDx6lQhyY',
  authDomain: 'project-2-893b8.firebaseapp.com',
  databaseURL: 'https://project-2-893b8.firebaseio.com',
  storageBucket: 'project-2-893b8.appspot.com',
  messagingSenderId: '836894626942',
};
firebase.initializeApp(config);

module.exports = firebase;
