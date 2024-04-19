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
    if (userPass.value.length > 6) {
      if (userPass.value === databasePassword) {
        let userEmailData = userEmail.value;
        let userPassData = userPass.value;
        // console.log(`${userEmailData}\n${userPassData}`);
        // let list = document.querySelector("#user_list");
        userEmail.value = "";
        userPass.value = "";
        // list.innerHTML += `<div>${userEmailData}</div><div>${userPassData}</div>`;
        // Swal.fire(`Your Email is ${userEmailData} and Your Password is ${userPassData}`);
        Swal.fire({
            title: 'Hi '+ userEmailData,
            text: 'You password is '+userPassData,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            // Check if the "OK" button was clicked
            if (result.isConfirmed) {
              // Your code to handle the "OK" button click goes here
            //   window.location.href = "welcome.html";
            }
          });
        // window.location.href = "welcome.html";
      } else {
        Swal.fire({
            icon: 'error',
            title: "Your Password is Incorrect",
        });
      }
    }else{
        Swal.fire("Your Password should be greater than 6 characters");
    }
  } else {
    Swal.fire({
        title: 'Invalid Email',
        icon: 'warning',
    });
  }

  // if (userEmail.value === databaseEmail && userPass.value === databasePassword) {
  //     window.location.href = "welcome.html";
  //   } else {
  //     Swal.fire("Invalid Email and Password");
  //   }  
}
