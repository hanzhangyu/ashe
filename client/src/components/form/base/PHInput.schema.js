export default {
  name: 'PHInput',
  propsSchema: {
    field: {
      model: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
      },
    },
  },
  // fieldSchema: {
  //   model: {
  //     type: String,
  //     required: true,
  //   },
  //   placeholder: {
  //     type: String,
  //   },
  // },
};
