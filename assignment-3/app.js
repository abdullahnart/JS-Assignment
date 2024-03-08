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

var myVar ;
document.write(myVar);