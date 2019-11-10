export default {
  name: 'PHSelect',
  propsSchema: {
    field: {
      model: {
        type: 'string',
        required: true,
      },
      placeholder: {
        type: 'string',
      },
      values: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};
