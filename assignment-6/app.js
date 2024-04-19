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

// let time = parseInt(prompt("Enter a time"));

// if(time >= 0 && time < 12 ){
// console.log("Good Morning")
// }else if (time >= 12 && time < 17 ){
//     console.log("Good Afternoon");   
// }
// else if (time >= 17 && time < 21 ){
//     console.log("Good Evening");   
// }
// else if (time >= 21 && time <=   24 ){
//     console.log("Good Night");   
// }
// else{
//     console.log("Please Enter correct time");
// }

// Function without Parameter
function greaterNumber(){
let num1 = +prompt("Enter You 1st Number");
let num2 = +prompt("Enter You 2nd Number");
let num3 = +prompt("Enter You 3rd Number");
    if (num1 > num2 && num1 > num3){
        console.log(`Condition 1: Number is ${num1} greater than Number ${num2} and ${num3}`);
    }
    else if (num2 > num1 && num2 > num3){
        console.log(`Condition 2: Number is ${num2} greater  than Number ${num1} and ${num3}`);
    }
    else{
        console.log(`Condition 3: ${num3} is greater than all numbers`);
    }
}

// greaterNumber();

// Function with Parameters 

// agr hmy ismy condition lagani ho k sary numbers ya 2 numbers bhi same ho tww message change hona chaiye tww kese hoga

function findGreaterNumber(a,b,c){
    if (a > b && a > c){
        console.log(`Condition 1: Number is ${a} greater than Number ${b} and ${c}`);
    }
    else if (b > a && b > c){
        console.log(`Condition 2: Number is ${b} greater than Number ${a} and ${c}`);
    }
    else if (a === b && b === c && a === c ){
        console.log(`Condition 3: All numbers are same`);
    }
    else if (a === b){
        console.log(`Condition 4: Number is c ${c} different but Number a ${a} and b ${b} are same`);
    }
    else if (b === c){
        console.log(`Condition 5: Number is a ${a} different but Number b ${b} and c ${c} are same`);
    }
    else if (a === c){
        console.log(`Condition 6: Number is b ${b} different but Number a ${a} and c ${c} are same`);
    }
    else{
        console.log(`Condition 7: ${c} is greater than all numbers`);
    }
}

let number1 = +prompt("Enter You 1st Number");
let number2 = +prompt("Enter You 2nd Number");
let number3 = +prompt("Enter You 3rd Number");

findGreaterNumber(number1,number2,number3);