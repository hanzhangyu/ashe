const schemaController = require('../controllers/schema');
const pageSchema = require('../schemas/page');

const urls = ['/app/product', '/app/product/create'];

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
