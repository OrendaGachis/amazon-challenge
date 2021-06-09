import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAyxZVCzlAi9-3IdBoYIFrBjwGzDvIOb8M",
    authDomain: "challenge-2b2ca.firebaseapp.com",
    projectId: "challenge-2b2ca",
    storageBucket: "challenge-2b2ca.appspot.com",
    messagingSenderId: "398608697141",
    appId: "1:398608697141:web:3972508206ed511dfdae7c",
    measurementId: "G-XF0WCJ3MD2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };