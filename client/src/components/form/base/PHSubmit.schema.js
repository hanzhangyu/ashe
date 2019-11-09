export default {
  name: 'PHSubmit',
  fieldSchema: {
    labelConfirm: {
      type: String,
      default: '立即创建',
    },
    labelCancel: {
      type: String,
      default: '取消',
    },
    showCancel: {
      type: Boolean,
      default: false,
    },
    action: {
      type: String,
      required: true,
    },
    submitSuccessLink: {
      type: String,
    },
  },
};
