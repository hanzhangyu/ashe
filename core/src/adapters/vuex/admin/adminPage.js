import { AdminInteractor } from '../../useCases';

function state() {
  return {};
}

const getters = {
  table() {
    return {
      list: [
        {
          id: '1323123312',
          url: '/product/list',
          name: '产品列表页',
          presenter: 'ashe-client',
          framework: 'vuex',
          modules: [
            {
              id: '123123',
              name: '产品搜索模块',
              link: '/admin/module/123123',
            },
            {
              id: '123124',
              name: '产品列表模块',
              link: '/admin/module/123124',
            },
          ],
        },
      ],
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
