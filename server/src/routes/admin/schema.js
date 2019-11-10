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
  {
    url: '/api/admin/schema/framework',
    method: 'POST',
    handler: adminSchemaController.uploadFramework,
  },
  {
    url: '/api/admin/schema/adapter',
    method: 'POST',
    handler: adminSchemaController.uploadAdapter,
  },
];

module.exports = apiRoutes;
