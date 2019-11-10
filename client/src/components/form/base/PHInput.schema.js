export default {
  name: 'PHInput',
  propsSchema: {
    field: {
      model: {
        type: 'string',
        required: true,
      },
      placeholder: {
        type: 'string',
      },
    },
  },
};
