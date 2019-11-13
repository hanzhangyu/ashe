import { ModulePageService } from '../../services';

export const ModulePageInteractor = {
  async getList({ offset = 0, limit = 10 } = {}) {
    return ModulePageService.getList({
      offset,
      limit,
    });
  },
};
