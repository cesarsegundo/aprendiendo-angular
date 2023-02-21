import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' // este es el nombre del pipe
})
export class ReplaceSpacePipe implements PipeTransform {
  // Esta clase remplaza los espacios por un gión -
  transform(value: string, args?: string): string {
    value = value.split(' ').join(args).toLocaleLowerCase()
    return value;
  }
}
