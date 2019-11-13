const moduleController = require('../../controllers/admin/module');
const moduleSchemas = require('../../schemas/module');

const apiRoutes = [
    {
        url: '/api/admin/module',
        method: 'GET',
        schema: moduleSchemas.getList,
        handler: moduleController.getList,
    },
];
module.exports = apiRoutes;
