// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqq2yjAClKorTKFL_UkstgboLDQ_dwLAI",
  authDomain: "bikes-discovery-app.firebaseapp.com",
  projectId: "bikes-discovery-app",
  storageBucket: "bikes-discovery-app.appspot.com",
  messagingSenderId: "861647992067",
  appId: "1:861647992067:web:be7432db17b2be1b8e2536",
  measurementId: "G-NJK8NPB0SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export const database = getFirestore(app)