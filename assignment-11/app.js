// let firstName = prompt("Enter a First Name");
// let lastName = prompt("Enter a Last Name");
// fullName =firstName.concat(lastName);
// console.log(fullName);

// let userMob = prompt("Enter A Mobile Model");
// console.log(`My Favorite phone is: ${userMob} \nLength of string ${userMob.length}`);

// let country = "Pakistani"
// console.log(country.indexOf("p"));


// let text = "Hello World"
// console.log(text.lastIndexOf("l"));

// let country = "Pakistani"
// console.log(country.charAt(3));

// let city = "Hyderabad";
// console.log(city);
// city = city.replace("Hyder","Islam");
// console.log(city);

// let message = 'Ali and Sami are best friends. They play cricket and football together.';
// console.log(message.replaceAll("and","&"));
// console.log(message.replace(/and/g,"&"));

// let number = parseInt("472");
// console.log(typeof(number)+number);


var num = '35.36';
num = num.split('.');
num = +num.join('');
console.log(typeof(num) + num);


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