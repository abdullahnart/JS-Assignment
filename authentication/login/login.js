let loginFields = document.querySelectorAll("form input");
const [loginEmail,loginPass] = loginFields;
console.log(loginEmail.value,loginPass.value, loginFields);
const data = JSON.parse(localStorage.getItem("userData"));

if (!data === null) {
    function loginAlready(){
        let isAccountKey = data.find((item)=>{
            return item.checkLogin === true;
         });
         console.log(isAccountKey);
         if(isAccountKey){
            window.location.href = "../dashboard/dashboard.html";
         }
    }
    
    loginAlready();
}

const login = ()=>{
event.preventDefault();

const {signEmail,signPass} = data
console.log(signEmail,signPass);
if (data !== null) {
let isLoggedIn = data.find((item)=>{
    return item.signEmail ===  loginEmail.value;
});

if(isLoggedIn){
    data.checkLogin = true;
    localStorage.setItem("userData",JSON.stringify(data));
    if(isLoggedIn.signEmail === "admin@gmail.com"){
        setTimeout( ()=>{
            window.location.href = "../admin/admin.html";
        },2000);
    }
    else if(isLoggedIn.signEmail === loginEmail.value){
        setTimeout( ()=>{
            window.location.href = "../dashboard/dashboard.html";
        },2000);
    }
    
} 
else{
    alert("Please Register Your Account");
} 
}  
else {
    alert("Data is not available");
}



// if(signEmail == loginEmail.value && signPass == loginPass.value){
//     console.log(loginEmail.value,loginPass.value);
//     setTimeout( ()=>{
//         window.location.href = "../dashboard/dashboard.html";
//     },2000)
    
// }else{
//     alert("Invalid Credentials");
// }
}