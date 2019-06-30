import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
       new Product('Totoro Keychain', 9.99, 'https://images-na.ssl-images-amazon.com/images/I/41I3Vsd3UfL._SX355_.jpg', 1, true),
       new Product('Deckhand cat food', 1.99, 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_375e9337-7cdd-4e35-b8bc-02acd4496bc3.jpg', 1, false),
       new Product('cat leash', 14.99, 'https://s7d1.scene7.com/is/image/PETCO/1081462-center-1?$ProductDetail-large-new$', 1, true),
       new Product('Treats', 2.99, 'https://images-na.ssl-images-amazon.com/images/I/814fZcaFS8L._SX425_.jpg', 1, false),
    ];
  }
  trackStockByCode(index, item) {
      return item.code;
  }
}
