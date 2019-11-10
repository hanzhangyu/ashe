module.exports = [
  {
    id: 1,
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
];
