const timerSettings = {
  selector: '#timer-1',
  targetDate: new Date('Mar 10, 2021'),
}

class CountdownTimer{
  consructor ({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.startTimer = this.startTimer.bind(this);
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    }
  }

  pad(value){
    return String(value).padStart(2, '0');
  }

  getTimeComponent(time){
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
    return {days, hours, mins, secs};
  }

  updateTimer({days, hours, mins, secs}){
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  startTimer(){
    setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;    
      const componentedTime = this.getTimeComponent(time);
      this.updateTimer(componentedTime);
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer(timerSettings);

// countdownTimer.startTimer();