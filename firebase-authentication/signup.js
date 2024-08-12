import {auth, createUserWithEmailAndPassword,onAuthStateChanged} from './firebase.js';

let allFields = document.querySelectorAll("form input");
const [signupEmail,signupPass] = allFields;
let signUpBtn = document.getElementById("signUpBtn");


const signUp = ()=>{
    event.preventDefault();
    console.log(signupEmail.value)
    signUpBtn.innerText = "Loading"
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
    .then((userCredential) => {
      signUpBtn.innerText = "Sign Up";
      const user = userCredential.user;
      alert(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      signUpBtn.innerText = "Sign Up";
      alert (errorMessage);
      // ..
  });
}

signUpBtn.addEventListener("click",signUp);



onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location.href = "./dashboard.html"
  } 
});