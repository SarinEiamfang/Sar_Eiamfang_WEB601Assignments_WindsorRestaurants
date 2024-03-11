import { Injectable } from '@angular/core';
import { CONTENT } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getContent(): Content[] {
    return CONTENT;
    }
  // return content (simulate database)

}
