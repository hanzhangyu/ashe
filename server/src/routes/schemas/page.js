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
    inline: { type: 'boolean' },
    syncToStore: { type: 'boolean' },
    labelWidth: { type: 'string' },
  },
};

const tableSchema = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['table'],
    },
    pagination: { type: 'boolean' },
    dataSourceAction: { type: 'string' },
    dataSource: { type: 'string' },
    timerUpdaterTimeout: { type: 'number' },
    timerUpdaterAction: { type: 'string' },
    columns: {
      type: 'array',
      items: {}, // TODO
    },
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
