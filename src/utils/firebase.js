// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3NT847icJk3b1SCwSlnu3JaHIp8wgpBs",
  authDomain: "netflix-gpt-40133.firebaseapp.com",
  projectId: "netflix-gpt-40133",
  storageBucket: "netflix-gpt-40133.appspot.com",
  messagingSenderId: "993294543501",
  appId: "1:993294543501:web:01bdd9a61e8f1b19f710c4",
  measurementId: "G-6MJ2DJRKFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);