// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPa6IdGt0ybYyW9t8mXZvQ6RG_0YI0HC4",
  authDomain: "fir-project-7ab9b.firebaseapp.com",
  projectId: "fir-project-7ab9b",
  storageBucket: "fir-project-7ab9b.appspot.com",
  messagingSenderId: "657435439681",
  appId: "1:657435439681:web:74171035e65b159cd68cc0",
  measurementId: "G-GT5WCDPGZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
