import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeRunner'
})
export class PipeRunnerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
