import { ProductService } from '../services';
import { ProductList } from '../entities';

export const ProductInteractor = {
  async getList({ offset = 0, limit = 10, query = {} } = {}) {
    const { list, total } = await ProductService.getList({
      offset,
      limit,
      ...query,
    });
    return new ProductList({ productList: list, total, offset, query });
  },
};
