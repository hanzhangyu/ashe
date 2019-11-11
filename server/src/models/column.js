const BaseModel = require('./baseModel');

class Column extends BaseModel {
  constructor() {
    super('column');
  }

  async get(id) {
    return this.collection.findOne({ id });
  }

  async getByIds(ids) {
    const cursor = await this.collection.find({ id: { $in: ids } });
    return this.getListFromCursor(cursor);
  }
}

module.exports = Column;
