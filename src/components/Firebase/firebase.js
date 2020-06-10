import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyB-4jyPK_jM-1EPowLf3K8cjCl7im55UQo',
  authDomain: 'react-firebase-authentic-83597.firebaseapp.com',
  databaseURL: 'https://react-firebase-authentic-83597.firebaseio.com',
  projectId: 'react-firebase-authentic-83597',
  storageBucket: 'react-firebase-authentic-83597.appspot.com',
  messagingSenderId: '625633250994',
  appId: '1:625633250994:web:69a259ba7c5e4a6c6e43ab',
  measurementId: 'G-XXQDE21TFD',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
