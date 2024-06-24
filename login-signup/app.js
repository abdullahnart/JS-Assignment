let email = document.querySelector("#email");
let password = document.querySelector("#password");
let message = document.querySelector("#message");
let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function login(){
    event.preventDefault();

    if(email.value !== '' && password.value !== ''){
        console.log(email.value)
        if(emailReg.test(email.value) ){
            if(passwordReg.test(password.value)){
                window.location.href = '/';
            }
            else{
                message.style.display = "block"
            }
        }else{
            alert("Please put valid email");
        }
    }else{
        alert("Input should not be empty")
    }
    

}

function messageTxt(){
message.style.display = "none"
}