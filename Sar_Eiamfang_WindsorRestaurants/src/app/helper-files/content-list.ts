import { Content } from "./content-interface";

export class ContentList {
    static contentCount = 0;
    private _items: Content[]; //private array

    constructor() {
        this._items = []; // initialize array to be empty
    }
    
    // getter function that retunrs Content array
    getItems() : Content[]{
        return this._items;
    }

    //A function that takes an input of an index of the array and returns a reader-friendly html 
    displayOutput(index: number){
        return `
        <p>${{}}</p>
        `
    }
    
    //A function that returns the number of items in the array
    increaseCount() {
        return ++ContentList.contentCount;
    }
}
    