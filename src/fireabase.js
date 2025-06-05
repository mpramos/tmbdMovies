// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRyIS8amrkiJUtClNkZSbo5lH5Wfj2z8Y",
  authDomain: "tmbdpeliculas.firebaseapp.com",
  projectId: "tmbdpeliculas",
  storageBucket: "tmbdpeliculas.firebasestorage.app",
  messagingSenderId: "481943521507",
  appId: "1:481943521507:web:117d13a1a1f990b477ddd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider= new GoogleAuthProvider();
export { auth, provider, signInWithPopup };