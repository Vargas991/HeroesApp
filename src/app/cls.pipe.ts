import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cls'
})
export class ClsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
