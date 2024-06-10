// let counter = document.querySelector("#counter");
// let milisec = 0;
// let sec = 0;
// let breakmin = 427;
// let min = 0;
// function counterFun(){
//     milisec++;
//     if(milisec == 427){
//         sec++;
//         milisec = breakmin;
//         if(sec == 395){
//             min++;
//             sec = 395;
//             if(min == 1){
//                 min =1;
//             }
//         }
//     }
//     counter.innerHTML = `<span>${min}</span>,<span>${sec}</span>,<span>${milisec}</span>`;
//     console.log(milisec);
// }
// function countstart(){
//     setInterval(counterFun,50)
// }
// countstart();

let all = document.querySelector(".img-div");
let ikea = document.querySelector(".ikea");
let marcos = document.querySelector(".marcos");
let caressa = document.querySelector(".caressa");
let liddy = document.querySelector(".liddy");
function allFunc(){
    document.body.classList.add('show-all');
    document.body.classList.remove('hide-all','marcos','caressa','liddy','ikea');
}
function ikeaFunc(){
    document.body.classList.add('hide-all','ikea');
    document.body.classList.remove('show-all','marcos','caressa','liddy');
}
function marcosFunc(){
    document.body.classList.add('hide-all','marcos');
    document.body.classList.remove('show-all','ikea','caressa','liddy');
}
function caressaFunc(){
    document.body.classList.add('hide-all','caressa');
    document.body.classList.remove('show-all','ikea','marcos','liddy');
    
}
function liddyFunc(){
    document.body.classList.add('hide-all','liddy');
    document.body.classList.remove('show-all','ikea','caressa','marcos');
}

// function showAll() {
//     // Show all images by setting the innerHTML of the style element
//     let all = document.getElementById('dynamic-style');
//     all.innerHTML = `.img-div { display: block }`;
// }

// function filterImages(allFilters) {
//     // Hide all images and then show only the filtered ones
//     // let filter = document.getElementById('dynamic-style');
//     filter.innerHTML = `.img-div.${allFilters} { display: block }`;
// }

// // Initialize to show all images
// showAll();