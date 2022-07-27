// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3PlYZLISEaWTeUC3B4K9R8b79Wyt8FM",
  authDomain: "messenger-3f542.firebaseapp.com",
  databaseURL:"http://messenger-3f542.firebaseio.com",
  projectId: "messenger-3f542",
  storageBucket: "messenger-3f542.appspot.com",
  messagingSenderId: "327778279887",
  appId: "1:327778279887:web:0bb1bc852e14126d7f72ba",
  measurementId: "G-M0K0073YTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};