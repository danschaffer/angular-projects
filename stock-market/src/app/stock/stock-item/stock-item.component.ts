import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Nasdaq Index', '.NASQ', 5100, 5090),
      new Stock('Dow Jones Index', '.DJI', 26900, 26500),
      new Stock('Adobe Systems', 'ADBE', 292, 295),
      new Stock('Google', 'GOOG', 1090, 1100),
      new Stock('Facebook', 'FB', 300, 320),
    ];
  }
}
