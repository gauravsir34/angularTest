import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanToNumber'
})
export class RomanToNumberPipe implements PipeTransform {
  transform(value: string): number {
    if (typeof value !== 'string' || value.trim() === '') return NaN;

    const romanNumerals: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let result = 0;
    let i = 0;
    
    while (i < value.length) {
      const twoChar = value.substr(i, 2);
      const oneChar = value.substr(i, 1);
      
      if (romanNumerals[twoChar]) {
        result += romanNumerals[twoChar];
        i += 2;
      } else if (romanNumerals[oneChar]) {
        result += romanNumerals[oneChar];
        i += 1;
      } else {
        return NaN; // Invalid Roman numeral
      }
    }
    
    return result;
  }
}
