import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-listforexp',
  templateUrl: './listforexp.component.html',
  styleUrls: ['./listforexp.component.css']
})
export class ListforexpComponent implements OnInit {

  constructor() { }
  @Input() products = products;
  @Input() product!: Product;
  @Output() remove = new EventEmitter();
  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale')
  }
  ngOnInit(): void {
  }
  PrRemove(index: number){
    this.products=this.products.filter((x)=>x.id!==index)
  }
}
