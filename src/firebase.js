// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt4ylu1DmN-vQ741PIkLQrK4rmI1k5bhA",
  authDomain: "mcga-c0b9f.firebaseapp.com",
  projectId: "mcga-c0b9f",
  storageBucket: "mcga-c0b9f.appspot.com",
  messagingSenderId: "1074965946096",
  appId: "1:1074965946096:web:5d3a986b0e06a7dc14ac35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;