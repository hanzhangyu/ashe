export default {
  name: '产品业务',
  getter: {
    table: '为 table 格式化后的产品数据',
    form: '产品列表的 搜索 model 数据来源',
  },
  action: {
    syncForm: '同步产品搜索域的数据至 store',
    getList: '获取产品列表',
    updateCountdown: '更新产品下架倒计时',
    create: '创建产品',
  },
};
