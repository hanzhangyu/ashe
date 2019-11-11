module.exports = [
  {
    id: 1,
    name: '产品列表产品编号列',
    label: '产品编号',
    key: 'id',
    tooltip: true,
    deleted: false,
  },
  {
    id: 2,
    name: '产品列表名称列',
    label: '名称',
    key: 'name',
    tooltip: true,
    deleted: false,
  },
  {
    id: 3,
    name: '产品列表类型列',
    label: '类型',
    key: 'type',
    tooltip: true,
    deleted: false,
  },
  {
    id: 4,
    name: '产品列表价格列',
    label: '价格',
    key: 'price',
    tooltip: true,
    deleted: false,
  },
  {
    id: 5,
    name: '产品列表照片集列',
    label: '照片集',
    key: 'picture',
    component: 'TablePhotoFrame',
    deleted: false,
  },
  {
    id: 6,
    name: '产品列表备注列',
    label: '备注',
    key: 'desc',
    tooltip: true,
    deleted: false,
  },
  {
    id: 7,
    name: '产品列表倒计时列',
    label: '倒计时',
    key: 'countdown',
    deleted: false,
  },
  {
    id: 8,
    name: '产品列表操作列',
    label: '操作',
    key: 'operation',
    component: 'TableOperation',
    deleteAction: 'product/delete',
    updateAction: 'product/openUpdater',
    deleted: false,
  },
  {
    id: 9,
    name: '管理 page 列表 - ID',
    deleted: false,
    label: 'ID',
    key: 'id',
    tooltip: true,
  },
  {
    id: 10,
    name: '管理 page 列表 - URL',
    deleted: false,
    label: 'URL',
    key: 'url',
    tooltip: true,
  },
  {
    id: 11,
    name: '管理 page 列表 - 名称',
    deleted: false,
    label: '名称',
    key: 'name',
    tooltip: true,
  },
  {
    id: 12,
    name: '管理 page 列表 - 适用客户端',
    deleted: false,
    label: '适用客户端',
    key: 'presenter',
    tooltip: true,
  },
  {
    id: 13,
    name: '管理 page 列表 - 框架',
    deleted: false,
    label: '框架',
    key: 'framework',
    tooltip: true,
  },
  {
    id: 14,
    name: '管理 page 列表 - 模块列表',
    deleted: false,
    label: '模块列表',
    key: 'modules',
    component: 'TableLinkListPopover',
    title: '所有模块（点击跳转）',
  },
  {
    id: 15,
    name: '管理 page 列表 - 操作',
    deleted: false,
    label: '操作',
    key: 'operation',
    component: 'TableOperation',
    deleteAction: 'adminPage/delete',
    linkEdit: '/admin/page/${id}',
  },
];
