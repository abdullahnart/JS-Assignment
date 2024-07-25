const data = JSON.parse(localStorage.getItem("userData"));
let username = document.querySelector("#username");
let img = document.querySelector("#profile");

const showData=()=>{
    const {signName, userImg}  = data;
    username.innerText = signName;
    img.src = userImg;
}
showData();