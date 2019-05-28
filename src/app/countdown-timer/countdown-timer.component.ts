import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()
  seconds = 11;
  clearTime() {
    clearInterval(this.intervalId);
  }

  constructor() { }

  ngOnInit() {
    this.reset();
    this.start();
  }
  ngOnDestroy() {
    this.clearTime();
  }
  start() {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
    this.countDown();
  }
  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds` ;
  }
  reset() {
    this.clearTime();
    this.remainingTime  = this.seconds;
    this.message = 'Click start button to start the Countdown';
  }
  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} second and counting`;
      }
    }, 1000);
  }
}
