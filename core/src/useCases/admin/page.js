import { AdminPageService } from '../../services';
import { replaceNullByUndefined } from '../../utils/helper';

export const AdminPageInteractor = {
  async getList({ offset = 0, limit = 10 } = {}) {
    return AdminPageService.getList({
      offset,
      limit,
    });
  },
  async create(params) {
    await AdminPageService.create(replaceNullByUndefined(params));
  },
};
