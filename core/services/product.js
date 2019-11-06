import axios from '../utils.axios';

export const ProductService = {
  async getList() {
    return await axios(`/api/product`, {
      params: {
        offset: 0,
        limit: 10,
      },
    }).data;
  },
};
