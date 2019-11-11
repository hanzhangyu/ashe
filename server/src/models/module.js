const BaseModel = require('./baseModel');
const { getListFromCursor } = require('../utils/helper');
const { MODULE_SUB_MODEL_MAP, MODULE_SUB_KEY_MAP } = require('../utils/const');

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
    const moduleSchemas = await getListFromCursor(moduleSchemaCursor);
    // typescript is angel
    await Promise.all(
      moduleSchemas.map(async moduleData => {
        const dataKey = MODULE_SUB_KEY_MAP[moduleData.type];
        const modelKey = MODULE_SUB_MODEL_MAP[moduleData.type];
        moduleData[dataKey] = await this.models[modelKey].getByIds(
          moduleData[dataKey],
        );
      }),
    );
    return moduleSchemas;
  }
  async getSub(moduleData) {
    if (moduleData.type === 'field') {
    }
  }
}

module.exports = Module;
