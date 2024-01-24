import { Component } from '@angular/core';
import { ContentList } from "./helper-files/content-list";

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Eddy's Mediterranean Bistro",
      description: "Mediterranean, Middle Eastern",
      creator: "420 Tecumseh Rd E",
      imgURL: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/southwestontario/Image-1-00bc39725056b3a_00bc3a72-5056-b3a8-494b96f577074523.jpg",
      type: "C$10 - C$30"
    });

    this.contentList.addContent({
      id: 1,
      title: "Souq Lebanese Grill",
      description: "Lebanese, Mediterranean, Grill",
      creator: "1-2651 Howard Ave",
      imgURL: "https://windsor.ctvnews.ca/content/dam/ctvnews/en/images/2023/10/1/souq-1-6585109-1696176500277.jpg",
      type: "C$3 - C$18"
    });

    this.contentList.addContent({
      id: 2,
      title: "Mezzo Ristorante & Lounge",
      description: "Italian, Canadian",
      creator: "804 Erie St E",
      imgURL: "https://thedrivemagazine.com/wp-content/uploads/sites/46/2023/01/Mezzo-_1_long.jpg",
      type: "C$0 - C$30"
    });

    this.contentList.addContent({
      id: 3,
      title: "Spago",
      description: "Italian, Pizza",
      creator: "690 Erie St E",
      imgURL: "https://www.visitwindsoressex.com/wp-content/uploads/2018/04/meat2.jpg",
      type: "C$0 - C$50"
    });

    this.contentList.addContent({
      id: 4,
      title: "The Cook's Shop Restaurant",
      description: "Italian, Tuscan",
      creator: "683 Ouellette Avenue",
      imgURL: "https://www.visitwindsoressex.com/wp-content/uploads/2018/04/meat2.jpg",
      type: "C$10 - C$30"
    });
  }

}