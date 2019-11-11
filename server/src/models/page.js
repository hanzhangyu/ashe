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

  async getList({ limit = 10, offset = 0 }) {
    const cursor = await this.collection
      .find()
      .skip(offset)
      .limit(limit);
    const list = await this.getListFromCursor(cursor);
    const total = await this.collection.estimatedDocumentCount();
    const moduleDatas = await this.getModuleByPages(list);
    list.forEach((page, index) => (page.modules = moduleDatas[index]));
    return {
      list,
      total,
    };
  }

  getModuleByPages(pageDatas) {
    return Promise.all(
      pageDatas.map(pageData => this.models.module.getByIds(pageData.modules)),
    );
  }
};
