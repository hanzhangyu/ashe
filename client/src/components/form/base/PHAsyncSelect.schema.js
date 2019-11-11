export default {
  name: 'PHAsyncSelect',
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
      multiple: {
        type: 'boolean',
      },
    },
  },
};
