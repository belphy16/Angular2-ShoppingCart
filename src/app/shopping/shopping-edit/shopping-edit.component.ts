import { Component,
   OnInit,
   ViewChild ,
   ElementRef,
   Output,
   EventEmitter} from '@angular/core';
import {ShoppingItem} from '../../shared/shoppingItem.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('inputName') inputNameRef : ElementRef;
@Output('shoppingItem') shopppingItemEl = new EventEmitter<ShoppingItem>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(inputAmount: HTMLInputElement) {
    const amount = inputAmount.value;
    const name = this.inputNameRef.nativeElement.value;
    this.shopppingItemEl.emit(new ShoppingItem(name,amount));
  }

}
