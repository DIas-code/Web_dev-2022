import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-phonecategories',
  templateUrl: './phonecategories.component.html',
  styleUrls: ['./phonecategories.component.css']
})
export class PhonecategoriesComponent implements OnInit {
  products = products;
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
