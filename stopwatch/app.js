let start = document.querySelector("#start");
let startTxt = document.querySelector("#timer");
let stop = document.querySelector("#stop");
let startBtn = document.querySelector("#startBtn");



let countStop ;
let countStart;
let timer;
function stopwatch(){
        countStart++;
        startTxt.innerText = countStart;
        console.log(countStart);

        if(countStart >= countStop){
            stopTimer();
        }
        startBtn.setAttribute("disabled","disabled");
// 
}

function startStopWatch(){
    countStart = parseInt(start.value) ;
    countStop = parseInt(stop.value);

    if (isNaN(countStart) || isNaN(countStop) || countStart < 0 || countStop <= countStart) {
        alert("Please enter valid start and stop times. Stop time should be greater than start time.");
        return;
    }
    startTxt.innerText = countStart;
    timer = setInterval(stopwatch,200);
}

function stopTimer(){
    clearInterval(timer);
    startBtn.removeAttribute("disabled","disabled");
}

function reset(){
    clearInterval(timer);
    countStart = "0";
    startTxt.innerText = "0";
    startBtn.removeAttribute("disabled","disabled"); 
    
}


// let timer = document.querySelector("#timers");
// let startBtn = document.querySelector("#play");
// let stopBtn = document.querySelector("#pause");
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let counter;
// function startTimer(){
//     seconds++;
//     if(seconds === 60){
//         minutes++
//         seconds = 0;
//         if(minutes === 60){
//             hours++
//             minutes= 0;
//         }
//     }
//     timer.innerText = `${hours}:${minutes}:${seconds}`;
//     startBtn.setAttribute('disabled','disabled');
// }

// function play(){
// counter = setInterval(startTimer,100);
// }


// function pause(){
//     clearInterval(counter);
//     startBtn.removeAttribute('disabled','disabled');
// }
// function reset(){
//     clearInterval(counter);
//     seconds =0;
//     minutes=0;
//     hours = 0;
//     timer.innerText = `0:0:0`;
// }
    