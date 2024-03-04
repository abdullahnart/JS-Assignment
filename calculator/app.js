
// If you declared variable once using var then you cannot declared that variable using let or const (It will give Error Syntax Error )
// var a ="abc";
// let a ="abc";
// var a = "abcs";
// document.write(a);

document.write("This is my Calculator <br>")
var num1 = +prompt("Enter a value");
var num2 = +prompt("Enter a value");
document.write("The Addition of two values is", num1 + num2, "<br>The Subtraction of two values is ", num1-num2,"<br>The Mulipication of two values is ", num1*num2, "<br>The Division of two values is ", num1/num2, "<br>The Modulus of two values is ", num1%num2 );