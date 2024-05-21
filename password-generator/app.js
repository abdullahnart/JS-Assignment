function passwordGenerator(){
    let passVal = document.querySelector("#text");
    let copied = document.querySelector('#copied');
    let createPass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    let password ='';
    for (let i = 0; i < 8; i++){
        let randomPass = Math.random() * createPass.length;
        let floorPass = Math.floor(randomPass);
        let makePass = password += createPass[floorPass];
        passVal.value = makePass;
        copied.innerText = "";
    }
}

function copyPass(){
    let passVal = document.querySelector("#text");
    let confirmPass = passVal.value;
    if(passVal.value != ''){
        navigator.clipboard.writeText(confirmPass);
        let copied = document.querySelector('#copied');
        copied.innerText = "Copied";
    }else{
        alert("Password is Empty");
    }

    
}