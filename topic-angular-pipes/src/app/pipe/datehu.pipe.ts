import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datehu'
})
export class DatehuPipe implements PipeTransform {

  monthNames: string[] = [
    'Január',
    'Február',
    'Március',
    'Április',
    'Május',
    'Június',
    'Július',
    'Augusztus',
    'Szeptember',
    'Október',
    'November',
    'December',
  ];

  transform(value: Date | undefined, format: string = 'long'): string | undefined {
    if ( !(value instanceof Date) ) {
      return value;
    }

    const month = format === 'long'
      ? this.monthNames[value.getMonth()]
      : value.getMonth() + 1;

    return `${value.getFullYear()} ${month} ${value.getDate()}`;
  }

}
