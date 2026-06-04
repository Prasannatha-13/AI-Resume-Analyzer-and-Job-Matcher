// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8ZT1Q_bzpbnslR4LCvJTDIbvvJf_jjw",
  authDomain: "ai-ra-jm.firebaseapp.com",
  projectId: "ai-ra-jm",
  storageBucket: "ai-ra-jm.firebasestorage.app",
  messagingSenderId: "963942380431",
  appId: "1:963942380431:web:e35880a300fe358c60d1fa",
  measurementId: "G-HP8PKVN23F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();