export default {
  name: 'TableOperation',
  propsSchema: {
    column: {
      deleteAction: {
        type: String,
        required: true,
      },
    },
  },
};
