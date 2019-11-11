const BaseModel = require('./baseModel');

module.exports = class Page extends BaseModel {
  constructor() {
    super('page');
  }

  async getByUrl(url) {
    return this.collection.findOne({ url });
  }
  async getWithModuleByUrl(url) {
    const pageSchema = await this.collection.findOne({ url });
    const moduleSchemas = await this.models.module.getWithSubByIds(
      pageSchema.modules,
    );
    pageSchema.modules = moduleSchemas;
    console.log(pageSchema);
    return pageSchema;
  }
};
