import firebase from 'firebase/app'
import   'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDPpHJJlVu3bqVZo2lo_ZraRu8QOfbc8pc",
    authDomain: "video-app-1dde5.firebaseapp.com",
    projectId: "video-app-1dde5",
    storageBucket: "video-app-1dde5.appspot.com",
    messagingSenderId: "184472739026",
    appId: "1:184472739026:web:8feb105d3926cdc712e10b"
  };
  firebase.initializeApp(firebaseConfig)

export  default firebase.auth();