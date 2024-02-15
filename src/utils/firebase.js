
import { getAuth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoF3BLjxcsze3r8QUF9sxgAxHUWOMO2SY",
  authDomain: "netflixgpt-9acae.firebaseapp.com",
  projectId: "netflixgpt-9acae",
  storageBucket: "netflixgpt-9acae.appspot.com",
  messagingSenderId: "855572247536",
  appId: "1:855572247536:web:22e72e3992033380ad2335",
  measurementId: "G-Q5Q1M1ELB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// auth
export const auth = getAuth()