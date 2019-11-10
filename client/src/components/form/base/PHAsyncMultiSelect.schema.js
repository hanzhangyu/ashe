export default {
  name: 'PHAsyncMultiSelect',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
      dataSourceAction: {
        type: String,
        required: true,
      },
    },
  },
};
