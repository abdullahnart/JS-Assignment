// agr hum prompt ko function k bahar rkhty hn tww function k click krny se phly propmt chlega or prompt ko function me use krna good practice nh h 

function ageCalculator(){
    let currentYear = 2024;
    let birthYear = +prompt("Enter Your Age");
    let age = currentYear - birthYear;
    swal.fire(`Your Age is ${age}`);
}
ageCalculator();

