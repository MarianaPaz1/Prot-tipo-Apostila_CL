//CONTADOR DE DIAS
//declarar constantes (days, hours, minutes and seconds) 
//puxar as informações com o getElementById através dos IDs declarados no html


const diasEl = document.getElementById("days");
const horasEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const segEl = document.getElementById("seconds");

const newYears = "20 sept 2022"

function countdown(){

    const newYearsDate = new Date (newYears)
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

   diasEl.innerHTML = days;
   horasEl.innerHTML = formatTime(hours);
   minsEl.innerHTML = formatTime(mins);
   segEl.innerHTML = formatTime (seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
    
}

countdown(newYears);

setInterval(countdown, 1000)