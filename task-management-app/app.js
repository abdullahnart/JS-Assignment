let userEmail = document.querySelector("#email");
// if I use this logic , this is not working. this is correct approach to input value
// let userEmail = document.getElementById("email").value;
// console.log(userEmail);
let userPass = document.querySelector("#password");
let databaseEmail = "admin@gmail.com";
let databasePassword = "12345678";

function userLogin() {
  event.preventDefault();
  if (userEmail.value === databaseEmail) {
    if (userPass.value === databasePassword) {
        window.location.href = "welcome.html";
    } else {
      Swal.fire("Your Password is Incorrect");
    }
  } else {
    Swal.fire("Invalid Email");
  }

// if (userEmail.value === databaseEmail && userPass.value === databasePassword) {
//     window.location.href = "welcome.html";
//   } else {
//     Swal.fire("Invalid Email and Password");
//   }
}
