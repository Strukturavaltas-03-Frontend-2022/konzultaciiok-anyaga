import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xPipe'
})
export class XPipePipe implements PipeTransform {

  // {pipe: [currency, slice], [['en-GB], [0, 3]]}
  // xPipe:col.pipes:col.pipeArgs

  transform(
    value: unknown,
    pipes: Array<PipeTransform | Function> | undefined,
    pipeArgs: any[][] | undefined
  ): unknown {
    if (!Array.isArray(pipes) || !pipes) {
      return value;
    }

    let output = value;
    for (let i = 0; i < pipes.length; i++) {
      const args = pipeArgs ? pipeArgs[i] || [] : [];
      if ((pipes[i] as {[x: string]: any})['transform']) {
        output = (pipes[i] as PipeTransform).transform(output, ...args);
      } else {
        output = (pipes[i] as unknown as Function)(output, ...args);
      }
    }

    return output;
  }

}