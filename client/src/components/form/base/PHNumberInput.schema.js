export default {
  name: 'PHNumberInput',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
      min: {
        type: Number,
      },
    },
  },
};
