import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any{
    const prevDate = moment(value);
    const currentDate = moment(Date.now());
    return currentDate.diff(value, "years");
  }

}
