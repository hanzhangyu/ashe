import { ProductService } from '../services';
import { ProductList } from '../entities';
import { replaceNullByUndefined } from '../utils/helper';

export const ProductInteractor = {
  async getList({ offset = 0, limit = 10, query = {} } = {}) {
    const { list, total } = await ProductService.getList({
      offset,
      limit,
      ...query,
    });
    return new ProductList({ productList: list, total, offset, query });
  },
  async create(params) {
    const { name, picture, type, delist, desc, price } = replaceNullByUndefined(
      params,
    ); // FIXME need front-end api schema?
    await ProductService.create({ name, picture, type, delist, desc, price });
    // 也可以在这里创建 product 实体
  },
};
