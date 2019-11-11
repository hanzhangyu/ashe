module.exports = class {
  constructor(collectionName) {
    this.name = collectionName;
    this.collectionName = collectionName;
  }

  async init(mongo, models) {
    this.models = models;
    this.db = mongo.db;
    this.collection = await this.db.collection(this.collectionName);
  }

  async getListFromCursor(cursor) {
    const list = [];
    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      list.push(doc);
    }
    return list;
  }
};
