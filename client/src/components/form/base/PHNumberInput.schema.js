export default {
  name: 'PHNumberInput',
  propsSchema: {
    field: {
      model: {
        type: 'string',
        required: true,
      },
      placeholder: {
        type: 'string',
      },
      min: {
        type: 'number',
      },
    },
  },
};
