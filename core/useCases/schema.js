import { SchemaService } from '../services';

export const SchemaInteractor = {
  async getPageSchema(path) {
    const schemas = await SchemaService.getPageSchema(path);
    return { schemas, models: SchemaInteractor.getModelFromSchema(schemas) };
  },

  getModelFromSchema(schemas) {
    return schemas.map(schema => {
      if (schema.type !== 'form') return null;
      return schema.fields.reduce((model, field) => {
        if (field.model) model[field.model] = field.default || null;
        return model;
      }, {});
    });
  },

  async getSkeletonSchema() {
    return SchemaService.getPageSchema('/skeleton');
  },
};
