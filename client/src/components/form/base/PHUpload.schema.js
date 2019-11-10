export default {
  name: 'PHUpload',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      action: {
        type: String,
        required: true,
      },
      accept: {
        type: String,
        required: true,
      },
    },
  },
};
