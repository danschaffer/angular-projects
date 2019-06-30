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
    this.stock = new Stock('Test Stock Company', 'TSC', 75, 20);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.1;
    this.stockStyles = {
        "color": this.stock.isPositiveChange() ? "green" : "red",
        "font-size": largeChange ? "1.2em" : "0.8em"
    };
  }

  toggleFavorite(event) {
    this.stock.favorite = !this.stock.favorite;
    console.log('toggling favorite state to ' + this.stock.favorite + ' event ', event);
  }

}
