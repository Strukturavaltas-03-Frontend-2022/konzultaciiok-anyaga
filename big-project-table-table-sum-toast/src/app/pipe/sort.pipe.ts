import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends {[x: string]: any}> implements PipeTransform {

  transform(value: T[], key: string, dir: number = 1): T[] {
    if (!Array.isArray(value) || !key) {
      return value
    }
    
    return value.sort( (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]) * dir
      }

      return ('' + a[key]).localeCompare(('' + b[key])) * dir
    })
  }

}
