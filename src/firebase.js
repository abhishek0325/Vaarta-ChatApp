import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzc3GFa5IuE4-ovhcaJUo1f673RyK2FKo",
  authDomain: "chat-app-9f338.firebaseapp.com",
  projectId: "chat-app-9f338",
  storageBucket: "chat-app-9f338.appspot.com",
  messagingSenderId: "522798811873",
  appId: "1:522798811873:web:848a9d91ff93efca4185a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
