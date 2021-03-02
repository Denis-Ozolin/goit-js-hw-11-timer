import CountdownTimer from "./timer.js";
import timerSettings from "./timerSettings.js";

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

const countdownTimer = new CountdownTimer(timerSettings, updateTimer);

function updateTimer({days, hours, mins, secs}){
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

// countdownTimer.start();
// console.log(new Date());
// console.log(new Date().getTime());


