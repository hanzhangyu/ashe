import product from './product';
import schema from './schema';
import adminPage from './admin/adminPage';
import adminModule from './admin/adminModule';

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
