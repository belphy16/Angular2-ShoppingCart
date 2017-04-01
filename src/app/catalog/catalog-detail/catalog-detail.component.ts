import { Component, OnInit,Input } from '@angular/core';
import {Catalog} from '../catalog.model';
@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {

  @Input() catalogDetail : Catalog;

  constructor() { }

  ngOnInit() {
  }

}
