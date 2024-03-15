// 1. Declare 3 variables in one statement.

document.write("<h1>Chapeter 4</h1>");

var var1 = "value1", var2 = "value2", var3 = "value3";
console.log(var1,var2,var3);

// 2. Declare 5 legal & 5 illegal variable names.
// Legal Variable
var users = "Users";
var userName = "User Name";
var user_f_name = "user_name";
var $username = "$username";
var username9 = "username9"

document.write('<h2 style = "margin-bottom:0px;">Legal Variable</h2><br>var users = "Users"; <br> var userName = "User Name"; <br> var user_f_name = "user_name"; <br> var $username = "$username"; <br> var username9 = "username9"')


// Illegal Variable

// var 123username = "123username";
// var user name= "user name";
// var user-name = "user-name";
// var *username = "*username";
// var function = "javascript reserved keyword";

document.write('<h2 style = "margin-bottom:0px;">Illegal Variable</h2><br>var 123username = "123username"; <br> var user name= "user name"; <br> var user-name = "user-name"; <br> var *username = "*username"; <br> var function = "javascript reserved keyword";')

document.write("<h2>Rules for naming JS variables</h2> <br> b) Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>underscore</b> and <b>dollar</b>.<br> c) Variables must begin with a <b>aplphabet</b>, <b>dollar sign</b> or <b>underscore</b>. For example $name, _name or name <br>d) Variable names are case <b>sensitive</b><br>e) Variable names should not be JS <b>keyword</b>");

document.write("<h1>Chapeter 5</h1>");

var num1 = 3;
var num2 = 5;
var totalnum = num1 + num2;
var totalnum2 = num1 - num2;
var totalnum3 = num1 * num2;
var totalnum4 = num1 / num2;
var totalnum5 = num1 % num2;
document.write('Sum of ', num1 , " and ", num2 , " is " , totalnum, '<br>Subtract of ', num1 , " and ", num2 , " is " , totalnum2, '<br>Multiply of ', num1 , " and ", num2 , " is " , totalnum3, '<br>Divide of ', num1 , " and ", num2 , " is " , totalnum4, '<br>Modulus of ', num1 , " and ", num2 , " is " , totalnum5,"<br>");

document.write("<h3 style = 'margin-bottom:0;'>3. Do the following using JS Mathematic Expressions</h3><br>")

var myVar ;
document.write(myVar);

var addNum = 5;
document.write(addNum);
var addNum2 = ++addNum;
document.write("<br>Value after increament "+addNum2, "<br>");
var addSeven = 7;
document.write(addNum+addSeven, "<br>");
var lessVal = --addNum;
document.write(addNum--+addSeven);

var moviePrice = 600;
var persons= 5;
var totalAmount = moviePrice * persons;
document.write("<br>Total Cost to buy " + persons + "  to a movie is " + totalAmount + " PKR <br>");

let a = 5;
// let a = (5 - 1 = 4) 4; after post decreament
// let a = (4 -1 = 3) after pre decreament
console.log(a-- + --a + ++a - a++);
            // 5 + --a + ++a - a++;
            // 5 + 3 + ++a - a++;
// console.log(a-- + --a + ++a - a++); 

// var item1 = +prompt("Price of item 1");
// var item2 = +prompt("Price of item 2");
// var qty1 = +prompt("Quantity of Item 1");
// var qty2 = +prompt("Quantity of Item 2");
// var shippingCharges = 100;
// document.write("<br>Price of item 1 is " + item1 + "<br>Price of item 2 is " + item2 + "<br> Quantity of Item 1 is " + qty1 + "<br> Quantity of Item 2 is " + qty2 + "<br>Shipping Charges " + shippingCharges);
// var myTotalAmount = item1*qty1+item2*qty2+shippingCharges;
// document.write("<br>Total Cost is " + myTotalAmount+"<br>");


// var obtainMarks = +prompt("Enter Your Marks");
// var totalMarks = +prompt("Enter Total Marks");
// var percentage = obtainMarks / totalMarks * 100;

// document.write(percentage);


// document.write("<h3>Age Calculator</h3>");

// var currentYear = 2024;
// var age = Number(prompt("Enter Your Birth Year"));
// var myAge = currentYear-age;
// document.write("<br> Your Age is " + myAge);
