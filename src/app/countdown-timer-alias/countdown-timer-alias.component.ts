import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-alias',
  templateUrl: './countdown-timer-alias.component.html',
  styleUrls: ['./countdown-timer-alias.component.css']
})
export class CountdownTimerAliasComponent implements OnInit, OnDestroy, OnChanges {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  // tslint:disable-next-line:no-input-rename
  @Input('remaining-time')
  seconds = 11;

  ngOnChanges(changes: SimpleChanges): void {
    if ('seconds' in changes) {
      let v = changes.seconds.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  cleanTime() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.cleanTime();
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  start() {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
    this.Countdown();
  }

  reset() {
    this.cleanTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  stop() {
    this.cleanTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  private Countdown() {
    this.cleanTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.cleanTime();
        this.message = 'Blast off!';
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
