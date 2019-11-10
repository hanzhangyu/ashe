const adminSchemaController = require('../../controllers/admin/schema');

const apiRoutes = [
  {
    url: '/api/admin/schema/component',
    method: 'POST',
    handler: adminSchemaController.uploadComponent,
  },
  {
    url: '/api/admin/schema/generator',
    method: 'POST',
    handler: adminSchemaController.uploadGenerator,
  },
];

module.exports = apiRoutes;
