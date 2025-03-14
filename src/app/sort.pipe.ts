import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {

    transform(array: any, args: string): any {
        return array.sort((a: any, b: any) => {
            if (a[args] > b[args]) {
                return -1;
            } else if (a[args] < b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}
