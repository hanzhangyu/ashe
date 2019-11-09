import axios from '../utils/axios';

export const ProductService = {
  async getList(params) {
    return (await axios(`/api/product`, { params })).data;
  },

  async create(data) {
    await axios.post('/api/product', data);
  },
};
