
// JS literal notation
let studentNames = [];

// JS object notation
let student_names = new Array();

// Declare and initialize a strings array.
let arr = ["Sadiq","Owais","Kashif"]

// Declare and initialize a numbers array.
let arrNumber = [23,64,123,83,24,3]

// Declare and initialize a boolean array.
let arrBoolean = [true,false,false,true,true];

// Declare and initialize a mixed array.
let mixArray = ["Usama","Farhan",98,"Jamal",true,45,null,false,undefined];

// Declare and Initialize an array and store available education qualifications in Pakistan
let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
console.log(qualifications);

let students = ['Michael','John','Tony'];
let studentMarks = [320,230,480];
let totalMarks = 500;

document.write(`Score of ${students[0]} is ${studentMarks[0]}. Percentage: ${studentMarks[0]/totalMarks*100}% <br>`);
document.write(`Score of ${students[1]} is ${studentMarks[1]}. Percentage: ${studentMarks[1]/totalMarks*100}%<br>`);
document.write(`Score of ${students[2]} is ${studentMarks[2]}. Percentage: ${studentMarks[2]/totalMarks*100}%<br>`);

let colorNames = ["Red","Green","Blue","Yellow","Orange"]
document.write("Original Array "+colorNames+"<br/>");

let userColor = prompt("Enter A color in Start","Black");
colorNames.unshift(userColor);
document.write(colorNames+" (Add Color in Start)  <br/>");

colorNames.shift(userColor);
colorNames.push(userColor);
document.write(colorNames+" (Add Color in End)  <br/>");

let userColor2 = prompt("Enter A color 2 in Start","White");
colorNames.unshift(userColor+","+userColor2);
document.write(colorNames+" (Add Color in Start)  <br/>");

colorNames.shift(userColor+","+userColor2);
document.write(colorNames+" (Remove Color from Start)  <br/>");

colorNames.pop(userColor+","+userColor2);
document.write(colorNames+" (Remove Color from End)  <br/>");


colorNames.splice(4,0,"Purple","Gray");
document.write(colorNames+" (Splice)  <br/>");

colorNames.splice(2,1);
document.write(colorNames+" (Splice)  <br/>");

studentMarks.sort();
document.write(studentMarks+" (Sorting)  <br/>");


let cities = ["Karachi","Lahore","Islamabad","Quetta"];
let selectedCities = cities.slice(1,3);

document.write(selectedCities+" (Slice)  <br/>");

let arra = ["This ", " is ", " my ", " cat "];
document.write(arra.join(" "));


let companies = ["Apple","Samsung","Oppo","Nokia"];
document.write(`<br><select><option>${companies[0]}</option><option>${companies[1]}</option><option>${companies[2]}</option><option>${companies[3]}</option></select>`);
