import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from '../../shared/shoppingItem.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingItems :  ShoppingItem[] = [
    new ShoppingItem('item1','10')
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddItem(item :ShoppingItem) {
    this.shoppingItems.push(item);
  }

}
