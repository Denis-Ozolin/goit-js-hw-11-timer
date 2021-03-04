class CountdownTimer{
  consructor ({selector, targetDate, onTick}){
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    // this.intervalId = null;
    // this.isActive = false;
  }

  start(){
    // if(this.isActive) return;
    // this.intervalId = 
      setInterval(() => {
        // this.isActive = true;
        console.log(this.targetDate);
        
        const currentDate = Date.now();
        const timeInSeconds = this.targetDate.getTime();
        const time = timeInSeconds - currentDate;
        const componentedTime = this.getTimeComponent(time);
        this.onTick(componentedTime).bind(this);
        console.log(componentedTime);
        
      }, 1000);
  }

  getTimeComponent(time){
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
    return {days, hours, mins, secs};
  }

  pad(value){
    return String(value).padStart(2, '0');
  }

    // stop(){
  //   clearInterval(this.intervalId);
  //   this.isActive = false;
  //   const time = this.getTimeComponent(0);
  //   this.onTick(time);
  // }
}

export default CountdownTimer;    


// --------------------getTimeComponent:----------------------
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
