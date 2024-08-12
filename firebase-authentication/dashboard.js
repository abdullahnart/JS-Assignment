import {auth,onAuthStateChanged,signOut} from './firebase.js';


let logoutBtn = document.getElementById("logout");
const logout = ()=>{
    signOut(auth).then(() => {
        window.location.href = "./signup.html"

        }).catch((error) => {
            console.log(error)
      });
}
logoutBtn.addEventListener("click",logout);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "./signup.html"
    } 
  });