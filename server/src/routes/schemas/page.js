const formSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['form'],
    },
    fields: {
      type: 'array',
      items: {}, // FIXME 定义这个 schema 通用格式太伤神了，我觉得先灵活为主...
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
    columns: {
      type: 'array',
      items: {}, // TODO
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
