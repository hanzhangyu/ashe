import { ModulePageInteractor } from '../../../useCases/admin';

function state() {
  return {
    moduleList: [],
    total: 0,
    pageSize: 100,
  };
}

const getters = {
  table(state) {
    return {
      list: state.moduleList,
    };
  },
};

const mutations = {
  SET_LIST(state, { list, total }) {
    state.moduleList = list;
    state.total = total;
  },
};

const actions = {
  async getList({ commit, state }, params = {}) {
    const { currentPage = 1 } = params;
    const offset = (currentPage - 1) * state.pageSize;
    const data = await ModulePageInteractor.getList({
      offset,
      limit: state.pageSize,
    });
    commit('SET_LIST', data);
    return data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
