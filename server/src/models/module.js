const BaseModel = require('./baseModel');
const { MODULE_SUB_MODEL_MAP, MODULE_SUB_KEY_MAP } = require('../utils/const');

class Module extends BaseModel {
  constructor() {
    super('module');
  }

  formatData(moduleData) {
    moduleData.link = '/admin/module/' + moduleData.id;
    return moduleData;
  }

  async get(id) {
    return this.formatData(await this.collection.findOne({ id }));
  }

  async getByIds(ids) {
    const cursor = await this.collection.find({ id: { $in: ids } });
    const moduleDatas = await this.getListFromCursor(cursor);
    return moduleDatas.map(this.formatData);
  }
  async getWithSub(id) {
    return this.collection.findOne({ id });
  }
  async getWithSubByIds(ids) {
    const moduleDatas = await this.getByIds(ids);
    // typescript is angel
    await Promise.all(
      moduleDatas.map(async moduleData => {
        const dataKey = MODULE_SUB_KEY_MAP[moduleData.type];
        const modelKey = MODULE_SUB_MODEL_MAP[moduleData.type];
        moduleData[dataKey] = await this.models[modelKey].getByIds(
          moduleData[dataKey],
        );
      }),
    );
    return moduleDatas;
  }
  async getSub(moduleData) {
    if (moduleData.type === 'field') {
    }
  }

  async getList({ limit = 10, offset = 0 }) {
    const cursor = await this.collection
      .find()
      .skip(offset)
      .limit(limit);
    const list = await this.getListFromCursor(cursor);
    const total = await this.collection.estimatedDocumentCount();
    // const moduleDatas = await this.getModuleByPages(list);
    // list.forEach((page, index) => (page.modules = moduleDatas[index]));
    return {
      list,
      total,
    };
  }

  async add(moduleData) {
    const total = await this.collection.estimatedDocumentCount();
    await this.collection.insertOne({
      id: total + 1,
      deleted: false,
      ...moduleData,
    });
  }
}

module.exports = Module;
