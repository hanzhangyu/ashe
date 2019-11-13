const pageController = require('../../controllers/admin/page');
const pageSchemas = require('../../schemas/page');

const apiRoutes = [
  {
    url: '/api/admin/page',
    method: 'GET',
    schema: pageSchemas.getList,
    handler: pageController.getList,
  },
  {
    url: '/api/admin/page',
    method: 'POST',
    schema: pageSchemas.create,
    handler: pageController.create,
  },
];
module.exports = apiRoutes;
