import { Component, OnInit } from '@angular/core';
import {Catalog} from './catalog.model';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

   catalogItem :Catalog;

  constructor() { }

  ngOnInit() {
  }

  onSelectedCatalogItem(catalog:Catalog){
    this.catalogItem = catalog;
  }

}
