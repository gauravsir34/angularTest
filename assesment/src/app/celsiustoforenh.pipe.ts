

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiustoforenh'
})
export class CelsiustoforenhPipe implements PipeTransform {
  transform(value: number): number {
    if (isNaN(value)) return NaN;
    return ((value - 32) * 5) / 9;
  }
}
