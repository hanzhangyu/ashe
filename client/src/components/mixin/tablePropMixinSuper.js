import propMixinSuperSuper from './_propMixinSuperSuper';

export default propMixinSuperSuper({
  propsBase: {
    row: { // 该数据由 dataSource 固定了，所以这里不做校验
      type: Object,
    },
  },
});
