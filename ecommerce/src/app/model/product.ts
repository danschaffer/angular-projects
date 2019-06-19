export class Product {
  constructor(public name: String,
              public price: number,
              public image: String,
              public amount: number,
              public onsale: boolean) {
  };

  get_total() {
    let total=this.price * this.amount;
    return total.toFixed(2);
  }
  add() {
    this.amount = this.amount + 1;
  }
  remove() {
    this.amount = this.amount - 1;
  }
}
