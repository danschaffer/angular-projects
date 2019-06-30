import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 75, 80);
  }

  toggleFavorite(event) {
    this.stock.favorite = !this.stock.favorite;
    console.log('toggling favorite state to ' + this.stock.favorite + ' event ', event);
  }

}
