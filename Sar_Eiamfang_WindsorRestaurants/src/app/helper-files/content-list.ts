import { Content } from "./content-interface";

export class ContentList {
    static contentCount = 0;
    private _items: Content[]; //private array

    constructor() {
        this._items = []; // initialize array to be empty
    }
    
    // getter function that retunrs Content array
    get Items() : Content[]{
        return this._items;
    }

    //A function that takes an input of an index of the array and returns a reader-friendly html 
    displayOutput(index: number){

        const content = this._items[index];

        return `

        <h1>${content.title}</h1>
        <h2> ${content.description}</h2>
        <p>Address: ${content.creator}</p>
        <p>Price: ${content.type}</p>
        <img src = ${content.imgURL}></img>

        `
    }
    
    //A function that returns the number of items in the array
    increaseCount(): number {
        return ++ContentList.contentCount;
    }

    addContent(contentItem: Content): void {
        this._items.push(contentItem);
      }
}
    