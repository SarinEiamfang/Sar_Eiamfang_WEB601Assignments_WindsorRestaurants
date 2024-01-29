import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  @Input () contentItems: Content[] = [];

  ngOnInit():void {
    this.contentItems = [
      {
        id: 1,
        title: "Eddy's Mediterranean Bistro",
        description: "Mediterranean, Middle Eastern",
        creator: "420 Tecumseh Rd E",
        imgURL: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/southwestontario/Image-1-00bc39725056b3a_00bc3a72-5056-b3a8-494b96f577074523.jpg",
        type: "C$10 - C$30",
        tags: ["Mediterranean", "Middle Eastern"]
      },
      {
        id: 2,
        title: "Souq Lebanese Grill",
        description: "Lebanese, Mediterranean, Grill",
        creator: "1-2651 Howard Ave",
        imgURL: "https://windsor.ctvnews.ca/content/dam/ctvnews/en/images/2023/10/1/souq-1-6585109-1696176500277.jpg",
        type: "C$3 - C$18",
        tags: ["Lebanese", "Mediterranean", "Grill"]
      },
      {
        id: 3,
        title: "Mezzo Ristorante & Lounge",
        description: "Italian, Canadian",
        creator: "804 Erie St E",
        imgURL: "https://thedrivemagazine.com/wp-content/uploads/sites/46/2023/01/Mezzo-_1_long.jpg",
        type: "C$0 - C$30",
        tags: ["Italian", "Canadian"]
      },
      {
        id: 4,
        title: "Spago",
        description: "Italian, Pizza",
        creator: "690 Erie St E",
        imgURL: "https://ca-times.brightspotcdn.com/dims4/default/e8391a4/2147483647/strip/true/crop/1023x575+0+0/resize/1200x674!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fad%2Fea%2F2d474f7be1521e070a73fbd17844%2Fla-1561580696-z4n2t6v0ye-snap-image",
        type: "C$0 - C$50",
        tags: ["Italian", "Pizza"]
      },
      {
        id: 5,
        title: "The Cook's Shop Restaurant",
        description: "Italian, Tuscan",
        creator: "683 Ouellette Avenue",
        imgURL: "https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2022/11/DSCF2897-1024x683.jpg",
        type: "C$10 - C$30",
        tags: ["Italian", "Tuscan"]
      },
      {
        id: 6,
        title: "Mazaar Lebanese Cuisine",
        description: "Lebanese, Mediterranean, Middle Eastern",
        creator: "372 Ouellette Ave",
        imgURL: "https://mazaar.ca/wp-content/uploads/2022/09/Mazaar-Lebanese-Cuisine-Gourmet-Dish-1229x1536.jpg",
        type: "C$20 - C$30",
        tags: ["Lebanese", "Mediterranean", "Middle Eastern"]
      }
    ];
  }

  showContentDetails(contentItem: Content): void {
    console.log(`ID: ${contentItem.id}, Title: ${contentItem.title}`);
  }

}
