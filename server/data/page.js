module.exports = [
  {
    id: 1,
    url: '/product',
    name: '产品列表页',
    presenter: 'ashe-client',
    framework: 'vuex',
    modules: [1, 2],
    deleted: false,
  },
  {
    id: 2,
    url: '/product/create',
    name: '产品创建页',
    presenter: 'ashe-client',
    framework: 'vuex',
    modules: [3],
    deleted: false,
  },
  {
    id: 3,
    url: '/admin/page',
    name: 'page 管理页',
    presenter: 'ashe-client',
    framework: 'vuex',
    modules: [4, 5],
    deleted: false,
  },
];
