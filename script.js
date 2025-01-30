let hrs = document.getElementById('hrs');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(setTime,1000)

function setTime(){
    let curTime = new Date();
    hrs.innerHTML = curTime.getHours();
    minutes.innerHTML = curTime.getMinutes();
    seconds.innerHTML = curTime.getSeconds();
}