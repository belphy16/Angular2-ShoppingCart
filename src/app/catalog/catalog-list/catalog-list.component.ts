import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {Catalog} from '../catalog.model';
import {CatalogService} from '../catalog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  catalogs : Catalog[] = [];


  constructor(private catalogService : CatalogService,private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.catalogs = this.catalogService.getCatalogs();
  }

addNewCatalog(){
  this.router.navigate(["new"],{relativeTo:this.route});
}


}
