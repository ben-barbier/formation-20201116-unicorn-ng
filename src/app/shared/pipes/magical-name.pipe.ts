import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {
    transform(value: string): string {
        return value
            .split('')
            .map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase()))
            .join('');
    }
}
