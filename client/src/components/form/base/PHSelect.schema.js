export default {
  name: 'PHSelect',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
      values: {
        type: Array,
        items: {
          type: String,
        },
      },
    },
  },
};
