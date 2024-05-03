let matrix = [
    [0,1, 2, 3],
    [1,0,1,2],
    [2,1,0,1]
];

console.log(matrix);

for(let i=1; i<=10; i++){
    document.write(i+"<br/>")
}

// let userInput = Number(prompt("Enter a Table do you want"));
// let tableLength = +prompt("Enter A Table Length");

// for(let i= 1; i<=tableLength; i++){
//     document.write(`${userInput} x ${i} = ${i * userInput} <br/>`);
// }

let fruits = ["apple", "banana", "mango", "orange","strawberry"];


for(let i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}

for(let i=0; i<fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

document.write("Counting <br>");
for(let i=1; i<=15; i++){
    document.write(i+"<br>");
}

document.write("Reverse Counting <br>");
for(let i=10; i>1; i--){
    document.write(i+"<br>");
}

// let bakeryItems = ["cake","cookie","brownie","chips","Patties"];
// let searchItem = prompt("Enter a bakery Item");
//     if(searchItem === bakeryItems){
//         console.log(bakeryItems[i]);
//     }else{
//         console.log("not found")
//     }

// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var userInput = prompt("Enter an item to search:").toLowerCase();

// Convert user input to lowercase for case-insensitive comparison

// Flag to track if the item is found
var isFound = false;

// Loop through the array to search for the item
for (var i = 0; i < A.length; i++) {
    // Convert the current item to lowercase for case-insensitive comparison
    var currentItemLower = A[i].toLowerCase();
    console.log(currentItemLower);

    // Check if the current item matches the user input
    if (currentItemLower === userInput) {
        isFound = true;
        break; // Exit the loop if the item is found
    }
}

// Display the result to the user
if (isFound) {
    console.log(`${userInput} is available at index ${i} in our bakery`);
} else {
    console.log(`${userInput} is not available in our bakery`);
}

    
var array = [3, 6, 2, 56, 89, 32, 5, 32];
var largest = 0;

for (let i=0; i < array.length; i++) {
    if (array[i] > largest) {
        // console.log(array[i]);
        largest = array[i];
    }
}

console.log(largest);