let userInput = document.querySelector("#search");
let btn = document.querySelector("#btn");
let main = document.querySelector("#main");
let body = document.querySelector("body");

function getData(){
    if(userInput.value.trim() === ""){
        main.innerHTML = `<p class = "error">Input Should not be empty</p>`
    }
    else{
    main.innerHTML = `<p class = "loader"></p>`   
    fetch(`https://api.github.com/users/${userInput.value}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        showUserData(data);
    })
    .catch((err)=>{
        main.innerHTML = `<p class = "error">${err}</p>`
    });
    }
    userInput.value = '';

}



function showUserData(data){
    console.log(data);
    const {avatar_url,name,bio,blog,followers,following,public_repos,login,html_url,location} = data;
    main.innerHTML = `<div class="card">
            <div>
            <img src="${avatar_url}" alt="${name}" class="avatar">
            </div>
            <div class="user-info">
            <h2>${name}</h2>
            <p>${bio}</p>
            <ul>
            <li>${followers} <strong>Followers</strong></li>
            <li>${following} <strong>Following</strong></li>
            <li>${public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos">
            <a class="repo" >${login}</a>
            <a class="repo" >${location}</a>
            <a class="repo" >${html_url}</a>
            </div>
            </div>
            </div>`
}
btn.addEventListener("click",getData);

userInput.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        getData();
    }
})