/**
 * @file db mock
 */
let id = 0;

const item = {
  id: 'id123123',
  name: 'name',
  price: 1.1,
  type: 'A',
  picture: [
    {
      url: 'https://www.w3schools.com/w3css/img_lights.jpg',
      name: '图片1',
    },
    {
      url: 'https://www.w3schools.com/w3css/img_forest.jpg',
      name: '图片2',
    },
  ],
  timestamp: 1573046591114,
  delist: 1583157474813,
  desc: '第一个产品',
};

const products = Array.from({ length: 100 }).map((_, index) => ({
  ...item,
  id: id++ + '',
  name: item.name + index,
  price: item.price + index,
  timestamp: item.timestamp + index,
  delist: item.delist + index * 1000,
  desc: item.desc + index,
}));

module.exports = {
  async getList(filter) {
    // await sleep(1000);
    return filter ? products.filter(filter) : products;
  },
  async add(product) {
    // await sleep(1000);
    if (products.length > 1000) return;
    product.id = id++ + '';
    product.timestamp = Date.now();
    products.push(product);
    // 应该在添加的时候使用二分查找插入的
  },
  async remove(id) {
    // await sleep(1000);
    const index = products.findIndex(prod => prod.id === id);
    if (~index) products.splice(index);
  },
};
