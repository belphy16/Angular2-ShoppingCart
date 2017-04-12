import { Component, OnInit ,OnDestroy} from '@angular/core';
import {ShoppingItem} from '../../shared/shoppingItem.model';
import {ShoppingService} from '../shopping.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  shoppingServiceSubscription : Subscription;
  shoppingItems :  ShoppingItem[] = []

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.shoppingItems =  this.shoppingService.getShoppingItems();
    this.shoppingServiceSubscription = this.shoppingService.newShoppingItem.subscribe(
       (items :  ShoppingItem[]) => {
         this.shoppingItems = items;
       }
    );
  }

ngOnDestroy() {
  console.log('unsubscribe');
  this.shoppingServiceSubscription.unsubscribe();
}


}
