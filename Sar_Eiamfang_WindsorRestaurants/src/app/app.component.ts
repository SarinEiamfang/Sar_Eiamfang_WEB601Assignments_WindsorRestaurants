import { Component, OnInit, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { MessagesComponent } from './messages/messages.component';
// import { Content } from './helper-files/content-interface';

import { RestaurantService } from './restaurant.service';
import { MessageService } from './message.service';
import { ContentCardComponent } from './content-card/content-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, MessagesComponent, ContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

