
import {EventEmitter,Injectable} from  '@angular/core';
import {Catalog} from './catalog.model';
import {ShoppingItem} from '../shared/shoppingItem.model';
import {ShoppingService} from './../shopping/shopping.service';

@Injectable()
export class CatalogService
{

 catalogSelected = new EventEmitter<Catalog>();

private  catalogs : Catalog[] = [
    new Catalog("catalog1","catalogDesc1",
    "https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg",
    [new ShoppingItem('book1','10'),
    new ShoppingItem('book2','20')]),
    new Catalog("catalog2","catalogDesc2",
    "https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg",
    [new ShoppingItem('book3','30'),
    new ShoppingItem('book4','40')])
  ];

constructor(private shoppingService:ShoppingService){

}
getCatalogs() {
 return  this.catalogs.slice();  //gives copy of array
}

setCatalogSelected(catalog: Catalog){
  this.catalogSelected.emit(catalog);
}

addToShoppingCart(items :ShoppingItem[]) {
  this.shoppingService.addShoppingItems(items);
}

 getCatalog(id : number) {
   return this.catalogs[id];
 }


}
