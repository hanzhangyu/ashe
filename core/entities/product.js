export class Product {
  constructor({ id, name, price, picture, type, timestamp }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.type = type;
    this.timestamp = timestamp;
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

  getCountDown() {
    if (this.isDelist) return 0;
    return Math.floor((this.delist - Date.now()) / 1000);
  }

  // ...
}
