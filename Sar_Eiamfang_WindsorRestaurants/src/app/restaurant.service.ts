import { Injectable } from '@angular/core';
import { CONTENT } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Assignment 7
import { HttpClient, HttpHeaders } from '@angular/common/http';

//  --------------------------------



@Injectable({
  providedIn: 'root'
})


export class RestaurantService {

  static getContentById(num: number): Content {
    throw new Error('Method not implemented.');
  }

  //  --------------------------------

  // Assignment 7

  // Assuming your in-memory server base URL is 'api/content'
  private apiUrl = 'api/CONTENT'; // Endpoint for content API

  constructor(private http:HttpClient, private messageService:MessageService) { }
  

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, CONTENT); 
  }

   // end of Assignment 7

  //  --------------------------------

  /**
       * @returns 
       * Add a function to this service that will retrieve the content array from the contentDb file
       * Return it using the obserable pattern
       */
      getContentObs():Observable<Content[]> {
        const contents = of(CONTENT);
            this.messageService.add('Content Array Loaded!');
        return contents;

      }


  getContentById(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }


}
