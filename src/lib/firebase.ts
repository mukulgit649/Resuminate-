import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ32qQ2Sx0eW2MlKi5hBoy97otBaUxTKU",
  authDomain: "resuminate-62028.firebaseapp.com",
  projectId: "resuminate-62028",
  storageBucket: "resuminate-62028.firebasestorage.app",
  messagingSenderId: "1016015161316",
  appId: "1:1016015161316:web:8d4a651e2a30b1c4bce9f1",
  measurementId: "G-1ML244CY7C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };
export type { User }; 