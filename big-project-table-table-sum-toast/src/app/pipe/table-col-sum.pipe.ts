import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableColSum'
})
export class TableColSumPipe<T extends {[x: string]: any}> implements PipeTransform {

  transform(rows: T[], colKey: string = ''): string {
    if (!Array.isArray(rows) || !colKey) {
      return '';
    }

    let output = 0;

    rows.forEach( row => {
      output += Number(row[colKey]);
    })

    return '' + output;
  }

}
