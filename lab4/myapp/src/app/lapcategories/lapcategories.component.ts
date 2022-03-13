import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-lapcategories',
  templateUrl: './lapcategories.component.html',
  styleUrls: ['./lapcategories.component.css']
})
export class LapcategoriesComponent implements OnInit {
  products = products;
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
