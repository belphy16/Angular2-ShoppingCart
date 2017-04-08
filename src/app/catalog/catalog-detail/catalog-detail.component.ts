import { Component, OnInit,Input } from '@angular/core';
import {Catalog} from '../catalog.model';
import {CatalogService} from './../catalog.service';
@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {

  @Input() catalogDetail : Catalog;

  constructor(private catalogService:CatalogService) { }

  ngOnInit() {
  }

 addToCart() {
   this.catalogService.addToShoppingCart(this.catalogDetail.shoppingItems);
 }


}
