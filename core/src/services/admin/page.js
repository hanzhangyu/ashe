import axios from '../../utils/axios';

export const AdminPageService = {
  async getList(params) {
    return (await axios(`/api/admin/page`, { params })).data;
  },
};
