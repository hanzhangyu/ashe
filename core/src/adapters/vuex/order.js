function state() {
  return {};
}

const getters = {
  table() {
    return {
      list: [],
    };
  },
};

const mutations = {};

const actions = {
  getList() {},
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
