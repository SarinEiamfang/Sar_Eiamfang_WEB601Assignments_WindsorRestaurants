import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { CONTENT } from '../helper-files/contentDb';
import { count } from 'rxjs';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // constructor() { }

  createDb() {

    // setting it to the value of our array of content
      
    // Code from lecture, two line below
        const content : Content[] = CONTENT;
        return {content};

    // Code from ChatGPT
      // return { content: CONTENT };
  }


  // Override the genId method to generate new IDs for content items
    // This method takes an array of content items as input and returns the next available ID
  genId(content: Content[]): number {


    // If there are existing content items, generate the next ID
    // Otherwise, return 2000 as the initial ID
    if (content.length > 0) {
      return Math.max(...(content.map(c => c.id) as number[])) + 1;
      } else {
        return 2000; // Initial ID when no content items exist
      }
  
      
    // Code from Lecture, but have an error
  
      // genId(content: Content[]): number {
      //   return content.length > 0 ?
      //   Math.max(...content.map(c => c.id)) + 1 : 2000;
      // }
    
  }


}
