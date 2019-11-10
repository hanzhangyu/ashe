export default {
  name: 'PHAsyncMultiSelect',
  propsSchema: {
    field: {
      model: {
        type: 'string',
        required: true,
      },
      placeholder: {
        type: 'string',
      },
      dataSourceAction: {
        type: 'string',
        required: true,
      },
    },
  },
};
