import {signOut,signInWithPopup,GoogleAuthProvider,auth, signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail} from './firebase.js';

let allFields = document.querySelectorAll("form input");
const [loginEmail,loginPass] = allFields;
let loginpBtn = document.getElementById("loginpBtn");
let googleBtn = document.getElementById("googleBtn");
let logoutBtn = document.getElementById("logout");
let forgot = document.getElementById("forgot");


const provider = new GoogleAuthProvider();
const signInGoogle =()=>{

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

}

googleBtn.addEventListener("click",signInGoogle);

const logout =()=>{
  signOut(auth).then(() => {
    alert("logout")
  }).catch((error) => {
    // An error happened.
  });
  
}
logoutBtn.addEventListener("click",logout);

// const login =()=>{
// event.preventDefault();
//   signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });
// }

// loginpBtn.addEventListener("click",login);


// const forgotPass =()=>{
//   event.preventDefault();
// sendPasswordResetEmail(auth, loginEmail.value)
//   .then(() => {
//       alert("check email")
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//   });
// }

// forgot.addEventListener("click",forgotPass);

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         window.location.href = "./dashboard.html"
//     } 
//   });