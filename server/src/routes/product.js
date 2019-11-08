const productController = require('../controllers/product');
const productSchemas = require('./schemas/product');

const apiRoutes = [
  {
    url: '/api/product',
    method: 'GET',
    schema: productSchemas.getList,
    handler: productController.getList,
  },
  {
    // TODO
    url: '/api/product/:id',
    method: 'GET',
    schema: productSchemas.getList,
    handler: productController.getList,
  },
  {
    // TODO
    url: '/api/product',
    method: 'POST',
    handler: productController.create,
  },
  {
    // TODO
    url: '/api/product/:id',
    method: 'PUT',
    schema: productSchemas.getList,
    handler: productController.getList,
  },
  {
    // TODO
    url: '/api/product/:id',
    method: 'DELETE',
    schema: productSchemas.getList,
    handler: productController.getList,
  },
];

const viewRoutes = [
  {
    url: '/app/product',
  },
  {
    url: '/app/product/create',
  },
];

module.exports = [...apiRoutes, ...viewRoutes];
