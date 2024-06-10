let bill_amount = document.querySelector("#bill_amount");
let tip = document.querySelector("#tip");
let total = document.querySelector("#total");

function calculation(){
    let billVal = bill_amount.value;
    // console.log(billVal);
    let tipVal = tip.value;
    // console.log(tipVal);
    let percentage = tipVal * billVal / 100;
    console.log(percentage);
    let result = Number(percentage) + Number(billVal);
    console.log(result);
    total.innerText = result;
}
