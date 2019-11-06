module.exports = (app, opts, next) => {
    ['product'].forEach(name => {
        const routes = require('./' + name);
        routes.forEach(route => {
            app.route(route);
        });
    });
    next();
};
