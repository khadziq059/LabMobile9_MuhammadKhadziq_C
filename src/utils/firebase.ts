// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDE0aNxRELfuTf_jgf2SK4MAuS61RfHonw",
    authDomain: "vue-firebase-h1d022059.firebaseapp.com",
    projectId: "vue-firebase-h1d022059",
    storageBucket: "vue-firebase-h1d022059.firebasestorage.app",
    messagingSenderId: "832114129533",
    appId: "1:832114129533:web:42e2560bc46e2af0e04f14"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };