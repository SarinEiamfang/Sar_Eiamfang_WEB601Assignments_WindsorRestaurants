import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentTypeFilter',
  standalone: true
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
