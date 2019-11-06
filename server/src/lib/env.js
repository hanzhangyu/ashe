const pkg = require('../../package.json');

module.exports = {
    name: pkg.name,
    version: pkg.version,
    env: process.env.NODE_ENV,
    isDev: process.env.NODE_ENV !== 'production',
};
