export default {
  name: 'TableOperation',
  propsSchema: {
    column: {
      deleteAction: {
        type: 'string',
        required: true,
      },
    },
  },
};
