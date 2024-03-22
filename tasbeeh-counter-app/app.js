let counter = 0;

function increament(){
    counter++;
    let incVal = document.getElementById('counter');
    incVal.innerText = counter;
    return counter;   
}
// increament();
function reset(){
    counter = 0;
    let reset = document.getElementById('counter');
    reset.innerText = counter;
    return counter;   
    
}