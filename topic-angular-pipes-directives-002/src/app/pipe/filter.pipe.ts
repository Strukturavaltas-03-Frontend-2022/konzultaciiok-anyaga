import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[x: string]: any}> implements PipeTransform {

  transform(list: T[], phrase: string = '', key: string = ''): T[] {
    if (!Array.isArray(list) || !phrase) {
      return list;
    }

    phrase = phrase.toLowerCase();

    if (key) {
      return list.filter( item => {
        if (typeof item[key] === 'number') {
          return Number(phrase) === item[key];
        }
        return ('' + item[key]).toLowerCase().includes(phrase);
      });
    }

    return list.filter(
      item => Object.values(item).join(' ').toLowerCase().includes(phrase)
    );
  }

}
