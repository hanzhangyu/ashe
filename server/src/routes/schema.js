const schemaController = require('../controllers/schema');
// const schemaSchema = require('../schemas/schema');

const urls = [
  // FIXME all page schema route
  '/app/product',
  '/app/product/create',
  '/app/admin/page',
];

const pageRoutes = urls.map(url => ({
  url,
  method: 'GET',
  // schema: pageSchema,
  handler: schemaController.getPageSchema,
}));

const skeletonRoute = {
  url: '/app/skeleton',
  method: 'GET',
  handler: schemaController.getSkeletonSchema,
};

module.exports = [...pageRoutes, skeletonRoute];
