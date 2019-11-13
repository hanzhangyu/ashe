import axios from '../../utils/axios';

export const ModulePageService = {
  async getList(params) {
    return (await axios(`/api/admin/module`, { params })).data;
  },
};
