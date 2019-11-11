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
};
