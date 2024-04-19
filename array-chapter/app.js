// Practice 27-08-2024

// Array Chapter

// Defination of Array :  Array use to store multiple values

// type of Declaration of array 
// 1. Literal Array
// let arr = ["Abdullah","Naseem","abdullah.dev1997@gmail.com","+923248205797"];
// 2. Object Array (Not used now);
// let array = new Array();


let arr = ["Abdullah","Naseem","abdullah.dev1997@gmail.com","+923248205797"];
console.log(arr);
console.log(`My First Name is ${arr[0]} \nMy Last Name is ${arr[1]} \nMy Email is ${arr[2]} \nMy Phone Number us ${arr[3]}`);

arr.push("Gulshan e Iqbal","Karachi", "Pakistan"); // Push can Store single and multiple values of last in array
console.log(arr);

arr.pop(); //Pop can Remove only single value of last in array without passing any argument
console.log(arr);

arr.unshift("Mr", "Dr", "M/S"); // Unshift can Add single and multiple values of starting in array
console.log(arr);

arr.shift(); // Shift can Remove only single value of starting in array without passing any argument
console.log(arr);


// let names = ["Mohsin","Waqas","Tanveer","Abdullah","Maaz"]
// console.log(names.slice(2,5));

let names = ["Mohsin","Waqas","Tanveer","Abdullah","Maaz"]
console.log(names.slice(2,5));

let list = ["HTML","CSS","Javascript"]
let addList = list.splice(2,1,"Bootstrap","Javascript");
console.log(list);

let color = ["Red","Green","Orange","Purple","Yellow"]
let replaceColor = color.splice(2,1,"Blue");
// color.splice(3,1);
console.log(replaceColor);

let array = [2, 3, 4];
// let remove = array.splice(1,1)   
console.log(array.splice(1,1));

let stdName = ["Ahtasham", "Wasiq", "Owais", "AbQadir"];
// let removeStdName = stdName.splice(1, 1);
console.log(stdName.splice(1, 1));


let data = ['Wordpress','Wix','Webflow','Squarespace','Shopify']
var getLat = data.length-1;
console.log(data[getLat]);

// for(i=1;i<=10;i++){
// console.log(`2 x ${i} = ${i+i}`);
// }



let evenNum = [];
let oddNum = [];
let userInput = parseInt(prompt("Enter a Number"))

for (let i = 0; i<userInput; i++){
  if(i%2==0){
   evenNum.push(i);
  }
  else{
    oddNum.push(i);
  }
}

console.log(evenNum);
console.log(oddNum);