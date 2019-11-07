import { Product } from './product';

export class ProductList {
  constructor({ productList = [], total = 0, offset = 0, query = {} } = {}) {
    this.list = [];
    this.total = total;
    this.offset = offset;
    this.query = query; // query by form filter，emmm，这里这样写是因为其他的搜索表单是服务器定义的，客户端不知道有哪些
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
