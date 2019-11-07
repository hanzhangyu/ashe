import axios from '../utils/axios';

export const SchemaService = {
  async getPageSchema(path) {
    return (await axios(`/app${path}`)).data;
  },
};
