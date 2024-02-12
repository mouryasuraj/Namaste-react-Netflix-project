// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw4F5h7WPWOVgYiRQjmRMwVR_Pj2lnhPI",
  authDomain: "netflixgpt-1dd40.firebaseapp.com",
  projectId: "netflixgpt-1dd40",
  storageBucket: "netflixgpt-1dd40.appspot.com",
  messagingSenderId: "5880098947",
  appId: "1:5880098947:web:89d4f1c3d318552a5aebb6",
  measurementId: "G-ZKJQPZSBK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// auth
export const auth = getAuth()