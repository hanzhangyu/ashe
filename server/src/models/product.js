module.exports = {
  async getList({
    start_ts = 0,
    end_ts = Date.now(),
    query = '',
    limit = 10,
    offset = 0,
  }) {
    const { db } = this.mongo; // 看来 fastify-mongodb 并不是为了这种架构设计的，可能只是专门为小型服务而开发的
    const collection = await db.collection('product');
    const cursor = await collection
      .find({
        timestamp: { $gte: start_ts, $lte: end_ts },
        name: { $regex: `.*${query}.*` },
      })
      .skip(offset)
      .limit(limit);
    const list = [];
    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      list.push(doc);
    }
    const total = await collection.estimatedDocumentCount();
    return {
      list,
      total,
    };
  },
  async add(product) {
    const { db } = this.mongo;
    const collection = await db.collection('product');
    const total = await collection.estimatedDocumentCount();
    await collection.insertOne({
      id: total + 1,
      timestamp: Date.now(),
      ...product,
    });
  },
  remove() {},
};
