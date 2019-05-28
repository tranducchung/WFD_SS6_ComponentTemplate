import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown-timer';
  countdownMsg = '';
  finishCountdown() {
    this.countdownMsg = 'Finished';
  }
  onRateChange(value) {
    console.log(value);
  }
}
