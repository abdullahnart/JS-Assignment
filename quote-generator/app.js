
function jokeGen(){
    let joke = document.querySelector("#joke");
    const quotes = [
        "Sabr do qisam ka hota hai: aik woh jo takleef deta hai aur doosra woh jo chahiye hota hai.",
        "Bewakoof ki zubaan uske dimaagh ki bandooq par hoti hai aur aqalmand ki zubaan uske dimaagh ke control mein hoti hai.",
        "Allah ne tumhein azaad paida kiya hai, toh dusron ka ghulaam ban kar kyun jiye?",
        "Bewakoof ke liye behtareen jawab khamoshi hoti hai.",
        "Tumhari dawa tum mein hai, magar tumhein ehsaas nahi hota. Tumhari bimari tum se hai, magar tumhein andaaza nahi hota.",
        "Zubaan sher ki tarah hoti hai. Agar tum ise azad chhodo ge toh kisi ko zaroor chot lagegi.",
        "Ek buzurg shakhs ka behtareen kaam maaf kar dena aur bhool jana hai.",
        "Tum mein sabse taqatwar woh hai jo apne ghussa ko control kar sake.",
        "Aadmi ka paimaan uski iraadaat hoti hai.",
        "Ilm rooh ko zinda karta hai."
    ];
    for(let i= 0; i<quotes.length; i++){
        createJok = Math.random() * quotes.length;
        jokeRound = Math.floor(createJok);
        joke.innerText = quotes[jokeRound];
    }
}

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Friday", "Sat"];
let date = new Date();
// let getDay = date.getTime();
// console.log(getDay);

// console.log(223.2523.toFixed(2));


// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// console.log(2.999.toFixed(2));

// var scoreAvg = .000001;


// console.log(scoreAvg.toFixed(7));


let convertNum = 212.62847;
console.log(parseInt(convertNum));