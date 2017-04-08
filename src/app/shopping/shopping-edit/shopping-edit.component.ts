import { Component,
   OnInit,
   ViewChild ,
   ElementRef,
   Output,
   EventEmitter} from '@angular/core';
import {ShoppingItem} from '../../shared/shoppingItem.model';
import {ShoppingService} from '../shopping.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('inputName') inputNameRef : ElementRef;


  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  onAdd(inputAmount: HTMLInputElement) {
    const amount = inputAmount.value;
    const name = this.inputNameRef.nativeElement.value;
    this.shoppingService.addShoppingItem(new ShoppingItem(name,amount));
  }

}
