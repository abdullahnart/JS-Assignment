let box = document.querySelector(".box");
let copyColor = document.querySelector("#copy");
let colors = '0123456789ABCDEF'
function flatUI(){
    let getColor = '';
    copyColor.innerText = "Copy";
    for(let i = 1; i <= 6; i++){
        let randomColor = colors[Math.floor(Math.random()* colors.length)];
        getColor += randomColor;
    }
    let setColor = box.style.backgroundColor = "#"+getColor; 
    box.innerText = setColor;

    // alert ("Copied");  
    console.log(setColor);
}

function copy(){
    setCol = box.innerText;
    navigator.clipboard.writeText(setCol);
    copyColor.innerText = "Copied";
}
