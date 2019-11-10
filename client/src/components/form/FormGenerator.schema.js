export default {
  name: 'FormGenerator',
  propsSchema: {
    schema: {
      // {type: 'form', fields: []} 这两个是系统预置的
      inline: {
        type: 'boolean',
      },
      modelSource: {
        type: 'string',
      },
      modelSourceAction: {
        type: 'string',
      },
      labelWidth: {
        type: 'string',
      },
    },
  },
};
