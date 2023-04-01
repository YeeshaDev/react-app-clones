
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

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


