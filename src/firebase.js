import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8xTfSK6Nqy5-a5lRqmVBoXmzijJAxni4",
  authDomain: "clone-e3030.firebaseapp.com",
  databaseURL: "https://clone-e3030.firebaseio.com",
  projectId: "clone-e3030",
  storageBucket: "clone-e3030.appspot.com",
  messagingSenderId: "280902616716",
  appId: "1:280902616716:web:2c76de5710d38a7b309da9",
  measurementId: "G-9GZMV2ME1K",
});

const auth = firebase.auth();
export { auth };
