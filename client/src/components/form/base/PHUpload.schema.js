export default {
  name: 'PHUpload',
  propsSchema: {
    field: {
      model: {
        type: 'string',
        required: true,
      },
      action: {
        type: 'string',
        required: true,
      },
      accept: {
        type: 'string',
        required: true,
      },
    },
  },
};
