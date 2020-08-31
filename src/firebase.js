import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXV-MAjhv8DIv6C7Hm8pFx1GmQXLbCBxg",
  authDomain: "messenger-clone-878e0.firebaseapp.com",
  databaseURL: "https://messenger-clone-878e0.firebaseio.com",
  projectId: "messenger-clone-878e0",
  storageBucket: "messenger-clone-878e0.appspot.com",
  messagingSenderId: "470612103522",
  appId: "1:470612103522:web:937fe30b1170a678f65c3b",
  measurementId: "G-VHSVLWWWZW",
});

const db = firebaseApp.firestore();
export default db;
