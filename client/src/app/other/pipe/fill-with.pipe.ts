import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillWith'
})
export class FillWithPipe implements PipeTransform {

  transform(value: number | string, length: number, char: string = '0'): string {
    let v: string = value.toString();
    while (v.length < length) {
      v = char + v;
    }
    return v;
  }

}
