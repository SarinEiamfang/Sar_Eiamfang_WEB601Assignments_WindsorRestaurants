import { Component, OnInit, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { MessagesComponent } from './messages/messages.component';
// import { Content } from './helper-files/content-interface';

import { RestaurantService } from './restaurant.service';
import { MessageService } from './message.service';
import { ContentCardComponent } from './content-card/content-card.component';


// Assignment 7
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from "./modify-content/modify-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        ContentListComponent,
        MessagesComponent,
        ContentCardComponent,
        HttpClientModule,
        HttpClientInMemoryWebApiModule
        // Code from Lecture shown the error 
        // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        //   dataEncapsulation: false,
        //   delay: 1000,
        // });
        ,
        ModifyContentComponent
    ]
})
export class AppComponent implements OnInit {
  title = "Windsor Top Restaurants";

  items:any;

  constructor(private restaurantService : RestaurantService, private messagesService : MessageService){ }

    ngOnInit() {
      // Fetch data when component is initialized
      this.getContentById(6);
    }

    getContentById(num: number) {
      this.restaurantService.getContentById(6).subscribe(content=> this.items = content);
    
      this.restaurantService.getContentById(num).subscribe(content => {
        this.items = content;
    });
    
    }

  
  }

