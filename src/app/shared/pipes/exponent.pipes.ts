import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'exponent'
})

export class ExponentPipes implements PipeTransform{
  transform(value: number, exponent = 1): any {
    return Math.pow(value, exponent);
  }
}
