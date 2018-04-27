import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export class TimeboxOption {
    constructor(public name: string, public minutes: number) {}
}

@Component({
  selector: 'app-timebox-component',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.css']
})
export class TimeboxComponent {
    private startDate: Date;
    public timeboxMinutes = 15;
    public timeboxOptions: TimeboxOption[] = [
        new TimeboxOption('Daily Scrum', 15),
        new TimeboxOption('Sprint Planning', 8 * 60),
        new TimeboxOption('Sprint Review', 4 * 60),
        new TimeboxOption('Sprint Retrospective', 3 * 60)
    ];

    public duration: Observable<number> = Observable.interval(250).map(tick => this.currentDuration);
    public isInTimebox: Observable<boolean> = Observable.interval(250).map(
        tick => this.currentDuration < (this.timeboxMinutes * 60 * 1000));

    public isRunning = false;

    public startTimer(): void {
        this.startDate = new Date();
        this.isRunning = true;
    }

    public stopTimer(): void {
        this.startDate = null;
        this.isRunning = false;

    }

    private get currentDuration(): number {
        if (!this.startDate) {
            return 0;
        }

        return Date.now() - this.startDate.getTime();
    }
}


