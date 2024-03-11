import { Injectable } from '@angular/core';
import { CONTENT } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  
  // only one function to return content (simulate database)
  getContent(): Content[] {
    return CONTENT;
    }


}
