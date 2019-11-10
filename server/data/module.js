module.exports = [
  {
    id: 1,
    name: '产品搜索模块',
    type: 'form',
    fields: [
      {
        id: 1,
        name: '产品搜索开始时间表单域',
        link: '/admin/field/1',
      },
      {
        id: 2,
        name: '产品搜索结束时间表单域',
        link: '/admin/field/2',
      },
      {
        id: 3,
        name: '产品搜索query表单域',
        link: '/admin/field/3',
      },
      {
        id: 4,
        name: '产品搜索搜索表单域',
        link: '/admin/field/4',
      },
      {
        id: 5,
        name: '产品搜索创建产品表单域',
        link: '/admin/field/5',
      },
    ],
    config: {
      inline: true,
      modelSource: 'product/form',
      modelSourceAction: 'product/syncForm',
    },
  },
  {
    id: 2,
    name: '产品列表模块',
    type: 'table',
    columns: [
      {
        id: 1,
        name: '产品列表产品编号列',
        link: '/admin/column/1',
      },
      {
        id: 2,
        name: '产品列表名称列',
        link: '/admin/column/2',
      },
      {
        id: 3,
        name: '产品列表类型列',
        link: '/admin/column/3',
      },
      {
        id: 4,
        name: '产品列表价格列',
        link: '/admin/column/4',
      },
      {
        id: 5,
        name: '产品列表照片集列',
        link: '/admin/column/5',
      },
      {
        id: 6,
        name: '产品列表备注列',
        link: '/admin/column/6',
      },
      {
        id: 7,
        name: '产品列表倒计时列',
        link: '/admin/column/7',
      },
      {
        id: 8,
        name: '产品列表操作列',
        link: '/admin/column/8',
      },
    ],
    config: {
      pagination: true,
      dataSourceAction: 'product/getList',
      dataSource: 'product/table',
      timerUpdaterTimeout: 10000,
      timerUpdaterAction: 'product/updateCountdown',
    },
  },
  {
    id: 3,
    name: '创建产品模块',
    type: 'form',
    fields: [
      {
        id: 6,
        name: '创建产品模块产品名称',
        link: '/admin/field/6',
      },
      {
        id: 7,
        name: '创建产品模块图集',
        link: '/admin/field/7',
      },
      {
        id: 8,
        name: '创建产品模块类型',
        link: '/admin/field/8',
      },
      {
        id: 9,
        name: '创建产品模块下架时间',
        link: '/admin/field/9',
      },
      {
        id: 10,
        name: '创建产品模块备注',
        link: '/admin/field/10',
      },
      {
        id: 11,
        name: '创建产品模块价格',
        link: '/admin/field/11',
      },
      {
        id: 12,
        name: '创建产品模块提交',
        link: '/admin/field/12',
      },
      {
        id: 13,
        name: '创建产品模块返回列表',
        link: '/admin/field/13',
      },
    ],
    config: {},
  },
];
