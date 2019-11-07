import { Product } from './product';

export class ProductList {
  constructor(productList = [], total = 0, offset = 0) {
    this.list = [];
    this.total = total;
    this.offset = offset;
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
