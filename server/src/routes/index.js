const pageSchema = require('../schemas/page');

module.exports = (app, opts, next) => {
  ['product', 'skeleton', 'admin', 'page'].forEach(name => {
    const routes = require('./' + name);
    routes.forEach(route => app.route(route));
  });
  next();
};
