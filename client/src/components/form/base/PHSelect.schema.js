export default {
  name: 'PHSelect',
  fieldSchema: {
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
};
