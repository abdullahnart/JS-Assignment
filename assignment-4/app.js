// 13-13-204 Assignment 4

let a = 10;
document.write(`The value of a is: ${a}<br>`);
document.write(`<br>The value of ++a is: ${++a}`);
document.write(`<br>Now the value of a is: ${a}<br>`);
document.write(`<br>The value of a++ is: ${a++}`);
document.write(`<br>Now the value of a is: ${a}<br>`);
document.write(`<br>The value of --a is: ${--a}`);
document.write(`<br>Now the value of a is: ${a}<br>`);
document.write(`<br>The value of a-- is: ${a--}`);
document.write(`<br>Now the value of a is: ${a} <br>`);

var val1 = 2;
var val2 = 1;
var result = --val1 - --val2 + ++val2 + val2--;
                // 1 ;
                // 1 - 0;
                // 1 - 0 + 1; 
                // 1 - 0 + 1 + 1; 
console.log(val1);
console.log(val2);
console.log(result);


let newUser = prompt("Enter Your Name: ");
document.write("<br>Welcome the class " + newUser + "<br>");


// let incVal = 3;
// console.log(incVal++ + incVal++ - incVal++ + incVal++ - ++incVal + ++incVal - --incVal + incVal-- - incVal--);
// console.log('b' + 'a' + + 'a' + 'a');
// console.log(018 - 015);

// let num = 87;
// console.log(!(num>=90));


const mathNumber = Number(prompt("Enter your Math Marks"));
const englishNumber = Number(prompt("Enter your English Marks"));
const urduNumber = Number(prompt("Enter your Urdu Marks"));

let obtainedMarks = mathNumber + englishNumber + urduNumber;
let totalMarks = 300;
let subjectMarks =100;

let engPer = (englishNumber/subjectMarks) *100;
let urduPer = (urduNumber/subjectMarks) *100;
let mathPer = (mathNumber/subjectMarks) *100;
let percentage = (obtainedMarks / totalMarks) * 100;

// if(obtainedMarks <= totalMarks){
//     if(percentage >= 90 && percentage <= 100){
//         document.write("Congratulations, You Got A-1 Grade and Your Marks is ",obtainedMarks, " out of " ,totalMarks);
//     }
//     else if (percentage >= 80){
//         document.write("Congratulations, You Got A Grade and Your Marks is ",obtainedMarks, " out of " ,totalMarks);
//     }
//     else if (percentage >= 70){
//         document.write("Good, You Got B Grade and Your Marks is ",obtainedMarks, " out of " ,totalMarks);
//     }
//     else if (percentage >= 60){
//         document.write("You need to work harder to improve. You Got C Grade and Your Marks is ",obtainedMarks, " out of " ,totalMarks);
//     }
//     else{
//         document.write("You have to leave the class. Your are Fail and Your Marks is ",obtainedMarks, " out of " ,totalMarks);
//     }
// }else{
//     document.write("Please Enter A Valid Marks, Total Marks is 300");
// }

if(obtainedMarks <= totalMarks){
        document.write(`
        <table>
        <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>
        <tr>
        <td>English</td>
        <td>${subjectMarks}</td>
        <td>${englishNumber}</td>
        <td>${engPer}%</td>
        </tr>
        <tr>
        <td>Math</td>
        <td>${subjectMarks}</td>
        <td>${mathNumber}</td>
        <td>${mathPer}%</td>
        </tr>
        <tr>
        <td>Urdu</td>
        <td>${subjectMarks}</td>
        <td>${urduNumber}</td>
        <td>${urduPer}%</td>
        </tr>
        <tr>
        <th></th>
        <th>${totalMarks}</th>
        <th>${obtainedMarks}</th>
        <th>${percentage}%</th>
        </tr>
        </table>`);
    
}else{
    document.write("Please Enter A Valid Marks, Total Marks is 300");
}

// let evenNum = parseInt(prompt("Enter a number to check 'EVEN' OR 'ODD'"));
// if(evenNum%2==0){
//     document.write(evenNum + " is Even Number");
// }
// else{
//     document.write(evenNum + " is Odd Number");
// }

// let temperature = 25;
// if (temperature > 30) {
//   console.log("It's a hot day!");
// } else if (temperature >= 20 && temperature <= 30) {
//   console.log("It's a nice day!");
// } else {
//   console.log("It's cold outside!");
// }


// let marks = 75;
// let grade = "";
// if (marks >= 90) {
//   console.log(grade = "A");
// } else if (marks >= 80 && marks < 90) {
//     console.log(grade = "B");
// } else if (marks >= 70 && marks < 80) {
//     console.log(grade = "C");
// } else {
//     console.log(grade = "D");
// }

                