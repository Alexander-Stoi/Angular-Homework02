import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviation'
})
export class AbbreviationPipe implements PipeTransform {

  transform(value: string): string {
        
    return value.split(" ").map(v => v[0]).join('');
    
  }

}
