import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { signInWithPopup,GoogleAuthProvider,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBSoQBSZdCn66gn0MI507utZnbeQjdEN14",
  authDomain: "login-signup-3ad59.firebaseapp.com",
  projectId: "login-signup-3ad59",
  storageBucket: "login-signup-3ad59.appspot.com",
  messagingSenderId: "133685700760",
  appId: "1:133685700760:web:fb15a405c15c2b73ca08ed",
  measurementId: "G-WBWQ7N87EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {signInWithPopup,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail,GoogleAuthProvider}