const formSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['form'],
    },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: ['DatePicker', 'Input', 'Upload', 'Select', 'NumberInput'],
          },
          label: { type: 'string' },
          model: { type: 'string' },
          required: { type: 'boolean' },
          message: { type: 'string' },
          trigger: { type: 'string', enum: ['change', 'submit'] },
          default: {},
          values: { type: 'array', items: {} },
          condition: { type: 'array', items: {} },
        },
      },
    },
  },
};

const tableSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['table'],
    },
    pagination: {
      type: 'boolean',
    },
    // TODO table 项、备注、删除
  },
};

module.exports = {
  response: {
    '200': {
      type: 'array',
      items: {
        anyOf: [formSchema, tableSchema],
      },
    },
  },
};
