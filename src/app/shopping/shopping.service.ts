import { EventEmitter} from '@angular/core';
import {ShoppingItem} from '../shared/shoppingItem.model';
export class ShoppingService {

  private shoppingItems :  ShoppingItem[] = [
    new ShoppingItem('item1','10')
  ];

  newShoppingItem = new EventEmitter<ShoppingItem[]>();
  getShoppingItems() {
    return this.shoppingItems.slice() ; //to return copy of shoppingItems;
  }

  addShoppingItem(item :ShoppingItem) {
    this.shoppingItems.push(item);
    this.newShoppingItem.emit(this.shoppingItems.slice());
  }

  addShoppingItems(items :ShoppingItem[]) {
    this.shoppingItems.push(...items);
    this.newShoppingItem.emit(this.shoppingItems.slice());
  }
}
