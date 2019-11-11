const fp = require('fastify-plugin');
const { asyncReduce } = require('../utils/helper');

const fastifyModels = async (app, opts) => {
  const Models = ['page', 'module', 'product'].map(moduleName => {
    return require(`./${moduleName}`);
  });

  // inject models
  const models = await asyncReduce(
    Models,
    async (models, Model) => {
      const model = new Model();
      await model.init(app.mongo, models);
      models[model.name] = model;
      return models;
    },
    {},
  );

  app.decorate('models', models);
};

module.exports = fp(fastifyModels);
