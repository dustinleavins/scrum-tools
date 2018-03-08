import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
    transform(durationMilliseconds: number): string {
        if (!durationMilliseconds) {
            return null;
        }
        const duration = moment.duration(durationMilliseconds);

        const hours = Math.trunc(duration.asHours());
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        if (hours) {
            return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }

        return `${minutes} minutes, ${seconds} seconds`;
    }
}
