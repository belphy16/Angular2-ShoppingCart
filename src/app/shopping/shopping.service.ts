import { EventEmitter} from '@angular/core';
import {ShoppingItem} from '../shared/shoppingItem.model';
import {Subject} from 'rxjs/Subject';
export class ShoppingService {

  private shoppingItems :  ShoppingItem[] = [
    new ShoppingItem('item1','10')
  ];

  //newShoppingItem = new EventEmitter<ShoppingItem[]>();
    newShoppingItem = new Subject<ShoppingItem[]>();
  getShoppingItems() {
    return this.shoppingItems.slice() ; //to return copy of shoppingItems;
  }

  addShoppingItem(item :ShoppingItem) {
    this.shoppingItems.push(item);
    this.newShoppingItem.next(this.shoppingItems.slice());
  }

  addShoppingItems(items :ShoppingItem[]) {
    this.shoppingItems.push(...items);
    this.newShoppingItem.next(this.shoppingItems.slice());
  }
}
