import { AdminPageInteractor } from '../../../useCases';

function state() {
  return {
    pageList: [],
    total: 0,
    pageSize: 100,
  };
}

const getters = {
  table(state) {
    return {
      list: state.pageList,
    };
  },
};

const mutations = {
  SET_LIST(state, { list, total }) {
    state.pageList = list;
    state.total = total;
  },
};

const actions = {
  async getList({ commit, state }, params = {}) {
    const { currentPage = 1 } = params;
    const offset = (currentPage - 1) * state.pageSize;
    const data = await AdminPageInteractor.getList({
      offset,
      limit: state.pageSize,
    });
    commit('SET_LIST', data);
  },
  async create({ dispatch, state }, params) {
    await AdminPageInteractor.create(params);
    await dispatch('getList');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
