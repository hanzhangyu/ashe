const pageSchema = require('./schemas/page');

module.exports = (app, opts, next) => {
  ['product'].forEach(name => {
    const routes = require('./' + name);
    routes.forEach(route => {
      // register view router
      if (!route.handler) {
        Object.assign(route, {
          schema: pageSchema,
          method: 'GET',
          handler(request, reply) {
            const { name } = this.env;
            const { page } = this.config;
            const { url } = reply.context.config;
            reply.send(page.views[url.replace(`${name}/`, '')]);
          },
        });
      }
      app.route(route);
    });
  });
  next();
};
