import { Component, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();


  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: []
  };


  contentForm: any;

  constructor(private restaurantService: RestaurantService, private MessageService: MessageService) { }

  addContent() {
    this.restaurantService.addContent(this.newContent).subscribe((addedContent) => {
      // Emit the newly added content
      this.contentAdded.emit(addedContent);


      // Clear input fields after adding content
      this.newContent = {
        title: '',
        description: '',
        creator: '',
        imgURL: '',
        type: '',
        tags: []
      };
    });
  }


}
