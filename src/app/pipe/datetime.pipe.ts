import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    moment.locale('th');
    if (moment(value).isValid()) {
      const thaiDate = `${moment(value).format('DD MMM')} ${moment(value).get('year') + 543} ${moment(value).format('HH:mm')}น.`;
      return thaiDate;
    } else {
      return '-';
    }
  }

}
