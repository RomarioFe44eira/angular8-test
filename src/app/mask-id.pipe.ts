import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskId'
})
export class MaskIdPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
