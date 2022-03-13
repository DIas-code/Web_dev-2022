import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../products";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() remove = new EventEmitter;
  removeProduct(index: number){
    this.remove.emit(index);
  }
  constructor(
  ) { }

  ngOnInit(): void {

  }

}
