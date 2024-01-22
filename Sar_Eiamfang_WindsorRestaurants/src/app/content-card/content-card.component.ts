import { Component } from '@angular/core';
import { ContentList } from "./helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  title = 'Sarin App';
}

contentItem:ContentList = {
  id: 1,
  title: 'Souq Lebanese Grill',
  description: 'Lebanese',
  creator: 'John',

}