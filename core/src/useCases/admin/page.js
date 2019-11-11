import { AdminPageService } from '../../services';

export const AdminPageInteractor = {
  async getList({ offset = 0, limit = 10 } = {}) {
    return AdminPageService.getList({
      offset,
      limit,
    });
  },
};
