import CountdownTimer from "./timer.js";

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

// function updateTimer({days, hours, mins, secs}){
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }

const timerSettings = {
  selector: '#timer-1',
  targetDate: new Date('Mar 8, 2021'),
  onTick: function updateTimer({days, hours, mins, secs}){
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
};

const countdownTimer = new CountdownTimer(timerSettings);

countdownTimer.start();



