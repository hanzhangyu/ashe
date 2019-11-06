/**
 * @file db mock
 */

const products = [
  {
    id: 'id',
    name: 'name',
    picture: 'picture',
    price: 1.1,
    timestamp: 1573046591114,
  },
];

module.exports = {
  async getList(filter) {
    // await sleep(1000);
    return filter ? products.filter(filter) : products;
  },
  async add() {
    // await sleep(1000);
    if (products.length > 1000) return;
    products.push();
    // 应该在添加的时候使用二分查找插入的
  },
  async remove(id) {
    // await sleep(1000);
    const index = products.findIndex(prod => prod.id === id);
    if (~index) products.splice(index);
  },
};
