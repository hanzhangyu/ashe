const BaseModel = require('./baseModel');

class Product extends BaseModel {
  constructor() {
    super('product');
  }

  async getList({
    start_ts = 0,
    end_ts = Date.now(),
    query = '',
    limit = 10,
    offset = 0,
  }) {
    const cursor = await this.collection
      .find({
        timestamp: { $gte: start_ts, $lte: end_ts },
        name: { $regex: `.*${query}.*` },
      })
      .skip(offset)
      .limit(limit);
    const list = await this.getListFromCursor(cursor);
    const total = await this.collection.estimatedDocumentCount();
    return {
      list,
      total,
    };
  }
  async add(product) {
    const total = await this.collection.estimatedDocumentCount();
    await this.collection.insertOne({
      id: total + 1,
      timestamp: Date.now(),
      ...product,
    });
  }
  remove() {}
}

module.exports = Product;
