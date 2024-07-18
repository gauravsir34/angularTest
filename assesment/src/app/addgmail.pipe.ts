
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addgmail'
})
export class AddgmailPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') return '';
    return `${value}@gmail.com`;
  }
}

