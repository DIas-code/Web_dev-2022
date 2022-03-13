import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-listforexp',
  templateUrl: './listforexp.component.html',
  styleUrls: ['./listforexp.component.css']
})
export class ListforexpComponent implements OnInit {

  constructor() { }
  products = products;
  @Input() product!: Product;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
  ngOnInit(): void {
  }

}
