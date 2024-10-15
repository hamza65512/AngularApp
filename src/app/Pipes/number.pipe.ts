import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
  standalone: true
})
export class NumberPipe implements PipeTransform {

  transform(value: number): string {
    var valueToConvert = value.toString().split('').reverse().join('');
    var final = '';
    var count = 3;
    for (var i = 0; i < valueToConvert.length; i++) {
      var digit = valueToConvert.at(i);
      final = digit + final;
      count--;

      if (count == 0 && i < valueToConvert.length - 1) {
        final = ',' + final;
        count = 2;
      }
    }

    return '\u20A8' + final;
  }

}
