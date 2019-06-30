import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 75, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    console.log(diff);
    let largeChange = Math.abs(diff) > 0.1;
    this.stockClasses = {
        "positive": this.stock.isPositiveChange(),
        "negative": !this.stock.isPositiveChange(),
        "large-change": largeChange,
        "small-change": !largeChange
    };
    console.log(this.stockClasses);
  }

  toggleFavorite(event) {
    this.stock.favorite = !this.stock.favorite;
    console.log('toggling favorite state to ' + this.stock.favorite + ' event ', event);
  }

}
