import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {Catalog} from '../catalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  catalogs : Catalog[] = [
    new Catalog("catalog1","catalogDesc1","https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg")

  ];

  @Output('catalogItemSelected') catalogSelected = new EventEmitter();

  constructor() {
    var c = new Catalog("catalog2","catalogDesc2","https://firebearstudio.com/blog/wp-content/uploads/2016/01/Best-Node.JS-Books-1024x551.jpg");
    this.catalogs.push(c);
  }

  ngOnInit() {
  }

  onSelectCatalogItem(catalog: Catalog) {
    this.catalogSelected.emit(catalog);
  }

}
