import { ProductService } from '../services';

export const ProductInteractor = {
  async getList() {
    return ProductService.getList();
  },
};
