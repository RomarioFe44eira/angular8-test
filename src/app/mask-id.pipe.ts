import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskId'
})
export class MaskIdPipe implements PipeTransform {

  transform(id: any): string {
    let idTexto: string = String(id);

    if (idTexto.length !== 13) {
        return idTexto;
    }

    return idTexto.substr(0, 4) + '-' +
           idTexto.substr(4, 7) + '/' + 
           idTexto.substr(11, 2);
}

}
