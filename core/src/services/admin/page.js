import axios from '../../utils/axios';

export const AdminPageService = {
  async getList(params) {
    return (await axios(`/api/admin/page`, { params })).data;
  },
  async create(data) {
    return (await axios.post(`/api/admin/page`, data)).data;
  },
};
