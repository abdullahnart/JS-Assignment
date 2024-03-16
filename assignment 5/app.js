// var cityName = prompt("Enter Your City").toLowerCase();
// var khiCity = "Karachi".toLowerCase();

// if (cityName === khiCity){
//     document.write("Welcome to city of lights<br>");
// }else{
//     document.write("You don't live in Karachi<br>");
// }


// var gender = prompt("Enter Your Gender").toLowerCase();

// if (gender === "male"){
//     document.write("Good Morning Sir.")
// }else{
//     document.write("Good Morning Ma'm.")
// }


// let trafficSignal = prompt("Which Light You See").toLowerCase();

// if(trafficSignal == 'red'){
//     document.write(`<table>
//                     <tr><th>Signal color</th><th>Message</th></tr>
//                     <tr><td style = "color:red;"><b>Red</b></td> <td style = "color:red;"><b>Must Stop</b></td></tr>
//                     <tr><td>Yellow</td> <td>Ready to move</td></tr>
//                     <tr><td>Green</td> <td>Move now</td></tr>
//                     </table>`);
// }
// else if (trafficSignal == 'yellow'){
//     document.write(`<table>
//                     <tr><th>Signal color</th><th>Message</th></tr>
//                     <tr><td>Red</td> <td>Must Stop</td></tr>
//                     <tr><td style = "color:orange;"><b>Yellow</b></td> <td style = "color:orange;"><b>Ready to move</b></td></tr>
//                     <tr><td>Green</td> <td>Move now</td></tr>
//                     </table>`);
// }
// else if (trafficSignal == 'green'){
//     document.write(`<table>
//                     <tr><th>Signal color</th><th>Message</th></tr>
//                     <tr><td>Red</td> <td>Must Stop</td></tr>
//                     <tr><td>Yellow</td> <td>Ready to move</td></tr>
//                     <tr><td style = "color:green;"><b>Green</b></td> <td style = "color:green;"><b>Move now</b></td></tr>
//                     </table>`);
// }
// else{
//     alert("Please put Valid Color of Traffic Signal");
// }

// let carFuel = Number(prompt("Enter Your Car's Fuel"));
// let remainFuel = 0.25;

// if (carFuel < remainFuel){
//     document.write("Please refill the fuel in your car. Your Remaining Fuel is " + remainFuel);
// }else{
//     document.write("You have enough Fuel");
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }else{
// alert("cat is smaller than car");
// }


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

if(obtainedMarks <= totalMarks){
    if(percentage >= 80 && percentage <= 100){
        document.write(`<h1>Marksheet</h1><table>
                        <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
                        <tr><td>Marks Obtained</td><td>${obtainedMarks}</td></tr>
                        <tr><td>Percentage</td><td>${percentage}%</td></tr>
                        <tr><td>Grade</td><td>A-one</td></tr>
                        <tr><td>Remarks</td><td>Excellent</td></tr>
                        </table>`);
    }
    else if (percentage >= 70){
        document.write(`<table>
                        <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
                        <tr><td>Marks Obtained</td><td>${obtainedMarks}</td></tr>
                        <tr><td>Percentage</td><td>${percentage}%</td></tr>
                        <tr><td>Grade</td><td>A</td></tr>
                        <tr><td>Remarks</td><td>Good</td></tr>
                        </table>`);
    }
    else if (percentage >= 60){
        document.write(`<table>
                        <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
                        <tr><td>Marks Obtained</td><td>${obtainedMarks}</td></tr>
                        <tr><td>Percentage</td><td>${percentage}%</td></tr>
                        <tr><td>Grade</td><td>B</td></tr>
                        <tr><td>Remarks</td><td>You need to improve</td></tr>
                        </table>`);
    }
    else{
        document.write(`<table>
                        <tr><td>Total Marks</td><td>${totalMarks}</td></tr>
                        <tr><td>Marks Obtained</td><td>${obtainedMarks}</td></tr>
                        <tr><td>Percentage</td><td>${percentage}%</td></tr>
                        <tr><td>Grade</td><td>Fail</td></tr>
                        <tr><td>Remarks</td><td>Sorry You can't sit in this class</td></tr>
                        </table>`);
    }
}else{
    alert("Please Enter A Valid Marks, Total Marks is 300");
}
