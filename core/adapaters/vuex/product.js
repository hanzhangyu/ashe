import { ProductList } from '../../entities';
import { ProductInteractor } from '../../useCases';

function state() {
  return {
    productList: new ProductList(),
    pageSize: 10,
  };
}

const getters = {
  table(state) {
    return {
      list: state.productList.list,
      pageSize: state.pageSize,
      currentPage: ~~(state.productList.offset / state.pageSize + 1),
    };
  },
};

const mutations = {
  SET_LIST(state, productList) {
    state.productList = productList;
  },
  REMOVE(state, index) {
    state.productList.remove(state.productList.get(index));
  },
  UPDATE_DESC(state, { index, desc }) {
    state.productList.get(index).desc = desc;
  },
  UPDATE_COUNTDOWN(state) {
    state.productList.list.forEach(product => product.updateCountDown());
  },
};

const actions = {
  async getList({ commit }, params) {
    const productList = await ProductInteractor.getList(params);
    commit('SET_LIST', productList);
  },
  updateCountdown({ commit }) {
    commit('UPDATE_COUNTDOWN');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
