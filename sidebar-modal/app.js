let offCanvas = document.querySelector(".off-canvas");
// let isOpen = false;
function menuSidebar(){
    offCanvas.style.left = "0px";
}

function closeMenu(){
    offCanvas.style.left = "-999px";
}

let modal = document.querySelector(".modal-container");
function openModal(){
    modal.style.display = "inline-block";
}
function closeModal(){
    modal.style.display = "none";
}