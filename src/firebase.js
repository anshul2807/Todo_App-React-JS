
  import firebase from 'firebase';
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxff0K-3IqtuNpSmqEFEWfnTdtlI97QDE",
  authDomain: "todoo-app-475aa.firebaseapp.com",
  databaseURL: "https://todoo-app-475aa-default-rtdb.firebaseio.com",
  projectId: "todoo-app-475aa",
  storageBucket: "todoo-app-475aa.appspot.com",
  messagingSenderId: "461917167056",
  appId: "1:461917167056:web:4afce37b1cd7a0ee5eadd5",
  measurementId: "G-4ML26KHLMW"
  });

  const db = firebase.firestore();

  export  default db;
  