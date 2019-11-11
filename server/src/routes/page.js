const pageController = require('../controllers/page');
const pageSchema = require('../schemas/page');

const urls = ['/app/product', '/app/product/create'];

const routes = urls.map(url => ({
  url,
  method: 'GET',
  // schema: pageSchema,
  handler: pageController.getPageSchema,
}));

module.exports = routes;
