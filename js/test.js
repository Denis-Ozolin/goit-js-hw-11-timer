const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

const timerSettings = {
  selector: '#timer-1',
  targetDate: new Date('Mar 8, 2021'),
};

function countdownTimer({selector, targetDate}){
  
  setInterval(() => {
    const newDate = Date.now();
    const time = targetDate.getTime() - newDate;
    const renderTime = getTimeComponent(time);
    updateTimer(renderTime);
  }, 1000);
}

function updateTimer({days, hours, mins, secs}){
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function getTimeComponent(time){
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return {days, hours, mins, secs};
}

function pad(value){
  return String(value).padStart(2, '0');
}

countdownTimer(timerSettings);