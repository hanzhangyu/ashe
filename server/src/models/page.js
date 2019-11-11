const BaseModel = require('./baseModel');

module.exports = class Page extends BaseModel {
  constructor() {
    super('page');
  }

  async getByUrl(url) {
    return this.collection.findOne({ url });
  }
  async getWithModuleByUrl(url) {
    const pageData = await this.collection.findOne({ url });
    pageData.modules = await this.models.module.getWithSubByIds(
      pageData.modules,
    );
    return pageData;
  }
};
