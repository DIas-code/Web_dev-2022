import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-othecategories',
  templateUrl: './othecategories.component.html',
  styleUrls: ['./othecategories.component.css']
})
export class OthecategoriesComponent implements OnInit {
  products = products;
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
