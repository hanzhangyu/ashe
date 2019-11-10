import propMixinSuperSuper from './_propMixinSuperSuper';

export default propMixinSuperSuper({
  propsBase: {
    model: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
