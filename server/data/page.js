module.exports = [
  {
    id: 1,
    url: '/product',
    name: '产品列表页',
    presenter: 'ashe-client',
    framework: 'vuex',
    modules: [1, 2],
  },
  {
    id: 2,
    url: '/product/create',
    name: '产品创建页',
    presenter: 'ashe-client',
    framework: 'vuex',
    modules: [3],
  },
];
