import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {Catalog} from '../catalog.model';
import {CatalogService} from '../catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  catalogs : Catalog[] = [];


  constructor(private catalogService : CatalogService) {

  }

  ngOnInit() {
    this.catalogs = this.catalogService.getCatalogs();
  }



}
