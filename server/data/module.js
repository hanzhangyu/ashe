module.exports = [
  {
    id: 1,
    name: '产品搜索模块',
    type: 'form',
    fields: [1, 2, 3, 4, 5],
    config: {
      inline: true,
      modelSource: 'product/form',
      modelSourceAction: 'product/syncForm',
    },
    deleted: false,
  },
  {
    id: 2,
    name: '产品列表模块',
    type: 'table',
    columns: [1, 2, 3, 4, 5, 6, 7, 8],
    config: {
      pagination: true,
      dataSourceAction: 'product/getList',
      dataSource: 'product/table',
      timerUpdaterTimeout: 10000,
      timerUpdaterAction: 'product/updateCountdown',
    },
    deleted: false,
  },
  {
    id: 3,
    name: '创建产品模块',
    type: 'form',
    fields: [6, 7, 8, 9, 10, 11, 12, 13],
    config: {},
    deleted: false,
  },
  {
    id: 4,
    name: '管理 page - 创建 page 模块',
    type: 'form',
    fields: [14, 15, 16, 17, 18, 19],
    config: {
      labelWidth: '120px',

    },
    deleted: false,
  },
  {
    id: 5,
    name: '管理 page - page 列表',
    type: 'table',
    columns: [9, 10, 11, 12, 13, 14, 15],
    config: {
      dataSourceAction: 'adminPage/getList',
      dataSource: 'adminPage/table',
    },
    deleted: false,
  },
];
