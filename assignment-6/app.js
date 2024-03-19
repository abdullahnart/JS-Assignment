// let checkVar = prompt("Enter Character");
// console.log(checkVar.toLowerCase() , checkVar.toUpperCase());


// let inputVal1 = parseInt(prompt("Enter 1st Number"));
// let inputVal2 = parseInt(prompt("Enter 2nd Number"));

// if (inputVal1>inputVal2){
//     console.log(inputVal1 + " is greater than " + inputVal2);
// }
// else if (inputVal1<inputVal2){
//     console.log(inputVal1 + " is lesser than " + inputVal2);
// }
// else if (inputVal1===inputVal2){
//     console.log(inputVal1 + " both are equals " + inputVal2);
// }
// else{
//     console.log("Enter A Valid Number");
// }


// let inputNum = Number(prompt("Enter a Number"));

// if(inputNum > 0){
//     document.write("Your Number is positive " + inputNum);
// }
// else if (inputNum < 0) {
//     document.write("Your Number is negative " + inputNum);
// }else if (inputNum === 0 ){
//     document.write("Your Number is " + inputNum);
// }
// else{
//     document.write("Please Enter a Valid Number");
// }


// let vowels = prompt("Enter a Vowels").toLowerCase();

// if(vowels === "a"){
//     document.write(vowels + " is a vowel");
// }
// else if (vowels === "e") {
//     document.write(vowels + " is a vowel");
// }
// else if (vowels === "i") {
//     document.write(vowels + " is a vowel");
// }
// else if (vowels === "o") {
//     document.write(vowels + " is a vowel");
// }
// else if (vowels === "u") {
//     document.write(vowels + " is a vowel");
// }
// else{
//     document.write("This is not vowels");
// }

// This is shortend Way to Find Vowels

// let vowels = prompt("Enter a Vowels").toLowerCase();

// if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
//     document.write(vowels + " is a vowels");
// }
// else{
//     document.write(vowels + " is not a vowels");
// }


// let userPass = prompt("Enter a Password");
// let myPass = 12345;

// if (userPass){
//     if(userPass==myPass){
//         console.log("Correct!");
//     }
//     else{
//         console.log("Incorrect password");
//     }
// }else{
//     console.log("Please enter your password");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// console.log(greeting = "Good day");
// }
// else{
// console.log(greeting = "Good Evening");
// }

let time = parseInt(prompt("Enter a time"));

if(time >= 0 && time < 12 ){
console.log("Good Morning")
}else if (time >= 12 && time < 17 ){
    console.log("Good Afternoon");   
}
else if (time >= 17 && time < 21 ){
    console.log("Good Evening");   
}
else if (time >= 21 && time <=   24 ){
    console.log("Good Night");   
}
else{
    console.log("Please Enter correct time");
}
