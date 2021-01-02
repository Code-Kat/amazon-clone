import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJWJ6oXRcdAk9_Vh07WK2sUGYS9Junags",
    authDomain: "clone-179a2.firebaseapp.com",
    projectId: "clone-179a2",
    storageBucket: "clone-179a2.appspot.com",
    messagingSenderId: "339077692111",
    appId: "1:339077692111:web:6b38f986b196d5857cd5ba",
    measurementId: "G-P1JK8MFCTR"
});

// const db = firebaseApp.firestore();
const auth =firebase.auth();

export { auth };