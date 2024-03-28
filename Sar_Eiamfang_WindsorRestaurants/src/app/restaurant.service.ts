import { Component, Injectable } from '@angular/core';
import { CONTENT } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})




export class RestaurantService {

  static getContentById(num: number): Content {
    throw new Error('Method not implemented.');
  }

  // Assignment 7

  private apiURL = 'api/content'; 

  private httpOptions = { 
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http:HttpClient, private messageService:MessageService) { }
  

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiURL, content, this.httpOptions).pipe(
      tap((newContent: Content) => {
        this.messageService.add(`Content "${newContent.title}" added successfully!`);
      })
    ); 


  }

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
