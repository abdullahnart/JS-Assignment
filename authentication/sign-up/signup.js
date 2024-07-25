let allFields = document.querySelectorAll("form input");
let profileImage = document.querySelector("#profile_image");
let imgUrl = "";
const [signupNname,signupEmail,signupPass,profileImg] = allFields;

let userInputData = JSON.parse(localStorage.getItem("userData")) || [];

function loginAlready(){
    let isAccountKey = userInputData.find((item)=>{
        return item.checkLogin === true;
     });
     console.log(isAccountKey);
     if(isAccountKey){
        window.location.href = "../dashboard/dashboard.html";
     }
}

loginAlready();

const signup = ()=>{
    event.preventDefault();
let isAccount = userInputData.find((item)=>{
   return item.signEmail === signupEmail.value;
});
if(isAccount){
    alert("Email already Registered");
}else{
    let obj = {
        signName : signupNname.value,
        signEmail : signupEmail.value,
        signPass : signupPass.value,
        userImg: imgUrl,
        checkLogin: false,
    }
    userInputData.push(obj);
    localStorage.setItem("userData",JSON.stringify(userInputData));
    window.location.href = "../login/login.html"
    // userInputData.push(obj);
    console.log(obj);
}
// alert(isAccount);



}

// const upload = ()=>{
//     let image = profileImg.files[0];


//     let filread = new FileReader();
//     filread.onload=()=>{
//         console.log(filread.result);
//         imgUrl = filread.result;
//     }
//     filread.readAsDataURL(image);
// }


const upload = ()=>{
    let multipleImg = profileImg.files;

    for(let i = 0; i < multipleImg.length; i++){
        
    let filread = new FileReader();
    filread.onload=()=>{

        setTimeout(()=>{
            imgUrl = filread.result;
            profileImage.innerHTML += `<img src = "${imgUrl}">`;
            console.log(imgUrl);
        },100 * i);


    }
    filread.readAsDataURL(multipleImg[i]);
    }

    
}

// Foreach use for Iteration and this function does not return

// let num = [23,423,234,223,342,423];

// let a = num.forEach((v,i,arr)=>{
//     return v,i,arr;
// })
// console.log(a);


// Map is also use for Iteration but this function do return


// let num = [23,423,234,223,342,423];

// let a = num.map((v,i,arr)=>{
//     return v,i,arr;
// })
// console.log(a);

// Filter is use for filter 

// let num = [23,423,234,223,342,423];


// let oj= [
//     {
//     name:"ab",
//     age: 21

//     },
//     {
//     name:"ak",
//     age: 25

//     }
// ]

// let a = num.filter((values,i,arr)=>{
//     return values > 232;
// })
// console.log(a);

// Find use for find keyword if it keyowrd condition so it will not move forward it shows result.

// let b = oj.find((item)=>{

//     return item.age > 20;

// });

// console.log(b);


// Some works like OR || operator If it get true so it will not move forward.

// let c = num.some((item)=>{
//     return item > 500;
// })

// console.log(c);

// Every see that every value is matched with condition so it will come true and if one valuefalse it will come false  

// let d = num.every((item)=>{
//     return item > 20;
// })

// console.log(d);

// reduce use for sum and optimize code reduce k ander 2 parameter hoty hn ik acculmulator (inital value) and current value

// let sum = num.reduce((acc,current)=>{

//     return acc + current;
// })

// console.log(sum);

// rest operator and spread operator sign is ... 3 dots 

// rest operator use in function only like rest operator return array

// const rest = (...num)=>{
//     console.log(num);
// }

// rest([23,434,344,6423,353]);


// spread operator 

// let num2 = [234,223,543,253,356,734,423];
// let num3 = ["asd","Asd","Agtesf",243,634,644];

// let finalNum = [...num3,...num2,...num3];
// console.log(finalNum);

