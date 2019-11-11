const pageController = require('../../controllers/admin/page');
const pageSchemas = require('../../schemas/page');

const apiRoutes = [
  {
    url: '/api/admin/page',
    method: 'GET',
    schema: pageSchemas.getList,
    handler: pageController.getList,
  },
];
module.exports = apiRoutes;
