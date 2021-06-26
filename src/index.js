import './sass/main.scss';

class CountdownTimer {
    constructor({targetDate, selector}){
        this.targetDate = targetDate;
        this.selector = selector;
        this.start();
    }

    start() {

        document.querySelector(this.selector)
            .insertAdjacentHTML('beforeend', this.createTimerTemplateEls({ days: this.pad(0), hours: this.pad(0), mins: this.pad(0), secs: this.pad(0) }));
        
            setInterval(() => {
            const time = new Date(this.targetDate).getTime() - Date.now();
            this.updateTimerElements(this.getTimeElements(time));
        }, 1000);
    };

    getTimeElements (time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs };
    };

    pad(value) {
        return String(value).padStart(2, '0');
    };

    createTimerTemplateEls ({ days, hours, mins, secs }) {
        return `<div class="field">
            <span class="value" data-value="days">${days}</span>
            <span class="label">Days</span>
            </div>
    
             <div class="field">
              <span class="value" data-value="hours">${hours}</span>
              <span class="label">Hours</span>
            </div>
          
            <div class="field">
              <span class="value" data-value="mins">${mins}</span>
              <span class="label">Minutes</span>
            </div>
          
            <div class="field">
              <span class="value" data-value="secs">${secs}</span>
              <span class="label">Seconds</span>
            </div>`;
    };

    updateTimerElements ({ days, hours, mins, secs }) {
        document.querySelector('[data-value="days"]').textContent = `${days}`;
        document.querySelector('[data-value="hours"]').textContent = `${hours}`; 
        document.querySelector('[data-value="mins"]').textContent = `${mins}`;
        document.querySelector('[data-value="secs"]').textContent = `${secs}`;
    };

};

const timer = new CountdownTimer({
    targetDate: new Date('Dec 7 2021'),
    selector: '#timer-1',
});





