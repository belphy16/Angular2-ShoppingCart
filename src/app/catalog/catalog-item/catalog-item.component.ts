import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Catalog} from '../catalog.model';
@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

 @Input('citem') catalogItem :Catalog;
 @Output('catalogitemout') catalogItemEmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClickCatalogItem() {
    this.catalogItemEmit.emit();
  }

}
