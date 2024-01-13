// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "divinenooks-f791b.firebaseapp.com",
  projectId: "divinenooks-f791b",
  storageBucket: "divinenooks-f791b.appspot.com",
  messagingSenderId: "605460930868",
  appId: "1:605460930868:web:62077d1ac40d8645254561"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
