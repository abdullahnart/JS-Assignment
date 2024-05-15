function tableGen() {
  let tableNum = document.querySelector("#tab_num");
  let range = document.querySelector("#range");
  let table = document.querySelector(".main-wrapper");
  if (tableNum.value === "" && range.value === "") {
    alert("Error");
  } else {
    for (let i = 1; i <= range.value; i++) {
      table.innerText =
        table.innerText + `${tableNum.value} x ${i} = ${tableNum.value * i} \n`;
    }
  }
}

// Test

// let number1 = +prompt("Enter a Number");
// let number2 = +prompt("Enter a Number");
// if (number1 > number2) {
//   console.log(`${number1} is greater than ${number2}`);
// } else if (number1 === number2) {
//   console.log(`${number1} and ${number2} both are equal `);
// } else if (number1 < number2) {
//   console.log(`${number1} is less than ${number2}`);
// } else {
//   console.log("Invalid");
// }
// if (number1 > 0) {
//   console.log(`Positive Number`);
// } else if (number1 < 0) {
//   console.log(`Negative Number`);
// } else if (number1 === 0) {
//   console.log(`Equal`);
// } else {
//   console.log("Invalid");
// }

