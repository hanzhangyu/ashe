const formSchema = {
  type: 'object',
  properties: {
    type: {
      const: 'form',
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
          default: { type: 'any' },
          values: { type: 'array', items: { type: 'any' } },
          condition: { type: 'array', minItems: 3, maxItems: 3 },
        },
      },
    },
  },
};

const tableSchema = {
  type: 'object',
  properties: {
    type: {
      const: 'table',
    },
    pagination: {
      type: 'boolean',
    },
    // TODO table 项、备注、删除
  },
};

module.exports = {
  type: 'object',
  properties: {
    skeleton: {
      type: 'object',
      properties: {
        header: { type: 'string', enum: ['PaulHeader', 'HanHeader'] },
        aside: { type: 'string', enum: ['PaulAside', 'HanAside'] },
        main: { type: 'string', enum: ['PaulMain', 'HanMain'] },
        footer: { type: 'string', enum: ['PaulFooter', 'HanFooter'] },
      },
    },
    views: {
      type: 'object',
      patternProperties: {
        '.*': {
          type: 'array',
          items: {
            oneOf: [formSchema, tableSchema],
          },
        },
      },
    },
  },
};
