const adminController = require('../controllers/admin');

const apiRoutes = [
  {
    url: '/api/admin',
    method: 'GET',
    handler: adminController.getList,
  },
];

const viewRoutes = [
  {
    url: '/app/admin/create',
  },
  {
    url: '/app/admin/create/schema',
  },
];

module.exports = [...apiRoutes, ...viewRoutes];
