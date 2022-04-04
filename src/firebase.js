import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALx_7jByf4xbtOw5kJFJV2zfwBhimaGKI",
  authDomain: "chat-app-72c53.firebaseapp.com",
  projectId: "chat-app-72c53",
  storageBucket: "chat-app-72c53.appspot.com",
  messagingSenderId: "93501603725",
  appId: "1:93501603725:web:c49773ff938688594607c4",
  measurementId: "G-9D84FXZV7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
