// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC89BHLk6uworbFnZICCw4SbcEchfYOXnI",
  authDomain: "netflix-clone-66be1.firebaseapp.com",
  projectId: "netflix-clone-66be1",
  storageBucket: "netflix-clone-66be1.appspot.com",
  messagingSenderId: "1002632750357",
  appId: "1:1002632750357:web:ee9784a28df4f6a1bc751c",
  measurementId: "G-DVW5NFQWXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}


