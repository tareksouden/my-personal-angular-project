import { Component } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';
import { PopinService } from './shared/services/popin.service';
import { Router } from '@angular/router';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Personal Project';
  spinnerVisible: boolean;
  popinVisible: boolean;
  message: string;
  firstButton: { action: any, label: string };
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(private spinnerService: SpinnerService, private popinService: PopinService, private idle: Idle, private keepalive: Keepalive) {
    // manage spinner
    this.spinnerService.spinnerObs$.subscribe(visible => {
        setTimeout(() => {
            this.spinnerVisible = visible;
        })
    });

    // sets an idle timeout of 1 minute.
    idle.setIdle(60);
    // sets a timeout period of 30 minutes. after 31 minutes of inactivity, the user will be considered timed out.
    idle.setTimeout(1800);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    //idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();

  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
