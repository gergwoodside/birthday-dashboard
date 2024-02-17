// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_rREe4yyAA2tCvjyZYfIZ2sqiDPLzpu0",
  authDomain: "birthday-dashboard.firebaseapp.com",
  projectId: "birthday-dashboard",
  storageBucket: "birthday-dashboard.appspot.com",
  messagingSenderId: "333610122646",
  appId: "1:333610122646:web:e63c530ac8a8c59d3771b7",
  measurementId: "G-KYNNWHQ5CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);