import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { MessagesComponent } from './messages/messages.component';
import { Content } from './helper-files/content-interface';
import { RestaurantService } from './restaurant.service';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Windsor Top Restaurants";

  constructor(private restaurantService : RestaurantService, private messagesService : MessageService){ }

  getContentById(num: number): Content {
    return RestaurantService.getContentById(num);
  }
  }

