// import { AdminInteractor } from '../../../useCases';

function state() {
  return {};
}

const getters = {
  table() {
    return {
      list: [
        {
          id: '1323123312',
          name: '产品搜索模块',
          type: 'form',
          config: {
            // ... 不尽相同
          },
          fields: [
            {
              id: '123123',
              name: '开始时间',
              link: '/admin/field/123123',
            },
            {
              id: '123124',
              name: '结束时间',
              link: '/admin/field/123124',
            },
            {
              id: '123125',
              name: 'query',
              link: '/admin/field/123125',
            },
            {
              id: '123126',
              name: '搜索',
              link: '/admin/field/123126',
            },
            {
              id: '123127',
              name: '创建产品',
              link: '/admin/field/123127',
            },
          ],
          column: [],
        },
      ],
    };
  },
};

const mutations = {};

const actions = {
  searchOption({ getters }) {
    return getters.table.list.map(item => ({
      value: item.id,
      label: item.name,
    }));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
