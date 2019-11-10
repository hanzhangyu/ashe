import product from './product';
import schema from './schema';
import adminPage from './adminPage';
import adminModule from './adminModule';

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
