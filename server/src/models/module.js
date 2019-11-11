const BaseModel = require('./baseModel');
const { getListFromCursor } = require('../utils/helper');

class Module extends BaseModel {
  constructor() {
    super('module');
  }

  async get(id) {
    return this.collection.findOne({ id });
  }
  async getWithSub(id) {
    return this.collection.findOne({ id });
  }
  async getWithSubByIds(ids) {
    const moduleSchemaCursor = await this.collection.find({ id: { $in: ids } });
    const moduleSchema = await getListFromCursor(moduleSchemaCursor);
    // console.log(moduleSchema);
    return moduleSchema;
  }
  async getSub(moduleData) {
    if (moduleData.type === 'field') {
    }
  }
}

module.exports = Module;
