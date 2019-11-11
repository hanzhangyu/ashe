const BaseModel = require('./baseModel');

class Field extends BaseModel {
  constructor() {
    super('field');
  }

  async get(id) {
    return this.collection.findOne({ id });
  }

  async getByIds(ids) {
    const cursor = await this.collection.find({ id: { $in: ids } });
    return this.getListFromCursor(cursor);
  }
}

module.exports = Field;
