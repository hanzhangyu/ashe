import product from './product';
import schema from './schema';
import adminPage from './admin/page';
import adminModule from './admin/module';

const modules = {
  product,
  schema,
  adminPage,
  adminModule,
};

function state() {
  return {};
}

export { modules, state };
