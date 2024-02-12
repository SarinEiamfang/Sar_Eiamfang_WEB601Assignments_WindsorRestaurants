import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter',
  standalone: true
})

export class ContentTypeFilterPipe implements PipeTransform {
  
  transform(contentItems: Content[], type?: string): Content[] {
    if(type && type!= ''){
      return contentItems.filter((contentItem) => contentItem.type?.includes(type));
    }
    return contentItems.filter((contentItem) => !contentItem.type);
  }
}
//taking in contentarray(contentitems) and type to filter 
//if that contentarray include specific type then it's going to be return.