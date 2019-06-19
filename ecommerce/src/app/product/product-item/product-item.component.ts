import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('Totoro Keychain', 9.99, 'https://images-na.ssl-images-amazon.com/images/I/41I3Vsd3UfL._SX355_.jpg', 1, false);
  }
}
