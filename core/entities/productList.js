import { Product } from './product';

export class ProductList {
  constructor(productList = []) {
    this.list = [];
    this.total = 0;
    this.offset = 0;
    this.add(productList);
  }

  add(list) {
    return this.list.push(...list.map(product => new Product(product)));
  }

  remove(product) {
    this.list.findIndex(item => product.isEmpty(item));
  }

  get(index) {
    return this.list[index];
  }

  // ...
}
