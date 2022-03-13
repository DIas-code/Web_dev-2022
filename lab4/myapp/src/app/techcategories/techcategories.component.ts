import {Component, Input, OnInit} from '@angular/core';
import {products,Product} from "../products";

@Component({
  selector: 'app-techcategories',
  templateUrl: './techcategories.component.html',
  styleUrls: ['./techcategories.component.css']
})
export class TechcategoriesComponent implements OnInit {
  products=products;
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
