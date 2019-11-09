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
    url: '/app/admin',
  },
];

module.exports = [...apiRoutes, ...viewRoutes];
