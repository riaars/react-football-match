import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyAsqMJwpGMXPKAKu0D3iBByVfAwBfljV3g',
  authDomain: 'football-de9c7.firebaseapp.com',
  databaseURL: 'https://football-de9c7.firebaseio.com',
  projectId: 'football-de9c7',
  storageBucket: 'football-de9c7.appspot.com',
  messagingSenderId: '938906615725',
  appId: '1:938906615725:web:7166c5e78ac3f8ff',
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
export {firebase, firebaseMatches};
