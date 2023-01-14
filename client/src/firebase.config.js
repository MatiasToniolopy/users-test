// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3WsMID9qlakh3RkTcpvP7nVID3v0JGFs",
  authDomain: "login-user-fd019.firebaseapp.com",
  projectId: "login-user-fd019",
  storageBucket: "login-user-fd019.appspot.com",
  messagingSenderId: "725322905114",
  appId: "1:725322905114:web:b2eff9df6b7bc6e85b03a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const signInWithGoogle = async () => await  signInWithPopup(auth,provider);