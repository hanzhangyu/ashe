export default {
  name: 'PHSubmit',
  propsSchema: {
    field: {
      labelConfirm: {
        type: 'string',
        default: '立即创建',
      },
      labelCancel: {
        type: 'string',
        default: '取消',
      },
      showCancel: {
        type: 'boolean',
        default: false,
      },
      action: {
        type: 'string',
        required: true,
      },
      submitSuccessLink: {
        type: 'string',
      },
    },
  },
};
