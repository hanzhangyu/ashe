const BaseModel = require('./baseModel');
const { getListFromCursor } = require('../utils/helper');

class Column extends BaseModel {
  constructor() {
    super('column');
  }

  async get(id) {
    return this.collection.findOne({ id });
  }

  async getByIds(ids) {
    const cursor = await this.collection.find({ id: { $in: ids } });
    return getListFromCursor(cursor);
  }
}

module.exports = Column;
