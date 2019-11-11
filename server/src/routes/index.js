// const schemaSchema = require('../schemas/schema');

module.exports = (app, opts, next) => {
  [
    // routes filename
    'product',
    'admin',
    'schema',
  ].forEach(name => {
    const routes = require('./' + name);
    routes.forEach(route => app.route(route));
  });
  next();
};
