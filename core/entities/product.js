export class Product {
  constructor({ id, name, price, picture, type, timestamp, desc, delist }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.type = type;
    this.timestamp = timestamp;
    this.desc = desc;
    this.delist = delist;
    this.countdown = 0;
  }

  isEqual(product) {
    return product.id === this.id;
  }

  isOnSale() {
    return this.type === 'A';
  }

  get isDelist() {
    return this.delist < Date.now();
  }

  updateCountDown() {
    if (this.isDelist) return 0;
    this.countdown = Math.floor((this.delist - Date.now()) / 1000);
  }

  // ...
}
