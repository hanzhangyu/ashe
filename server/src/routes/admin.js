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
    url: '/app/admin/page',
  },
  {
    url: '/app/admin/page/:id',
  },
  {
    url: '/app/admin/module',
  },
  {
    url: '/app/admin/field',
  },
  {
    url: '/app/admin/column',
  },
];

module.exports = [...apiRoutes, ...viewRoutes];
