import app from 'firebase/app';
import 'firebase/auth';
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
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignUserWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
