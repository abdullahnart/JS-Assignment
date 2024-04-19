let count = 0;

function countInc(){
    count++;
    let incVal = document.querySelector("#counter");
    incVal.innerText = count;
    let addVal = document.querySelector(".add-counter");
    addVal.innerHTML = `<p>${count}</p>`;
}

function countReset(){
    count = 0;
    let reset = document.querySelector("#counter");
    reset.innerText = count;
    let resetVal = document.querySelector(".add-counter");
    resetVal.innerHTML = `<p>${count}</p>`;
}

