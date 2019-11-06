import { ProductList } from '../../entities';

function state() {
  return {
    productList: new ProductList(),
    pageSize: 10,
    currentPage: 1,
  };
}

const getters = {};

const mutations = {
  SET_LIST(state, list) {
    state.productList = new ProductList(list);
  },
  REMOVE(state, index) {
    state.productList.remove(state.productList.get(index));
  },
  UPDATE_DESC(state, { index, desc }) {
    state.productList.get(index).desc = desc;
  },
};

const actions = {
  async getList({ commit }, assetList) {},
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
