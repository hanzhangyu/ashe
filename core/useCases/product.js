import { ProductService } from '../services';
import { ProductList } from '../entities';

export const ProductInteractor = {
  async getList({ offset = 0, limit = 10 } = {}) {
    const { list, total } = await ProductService.getList({ offset, limit });
    return new ProductList(list, total, offset);
  },
};
