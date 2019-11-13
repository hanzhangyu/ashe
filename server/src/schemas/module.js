const moduleData = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string', enum: ['form', 'table'] },
    config: {},
  },
};

exports.getList = {
  description: 'get product list',
  querystring: {
    type: 'object',
    properties: {
      limit: { type: 'number' },
      offset: { type: 'number' },
    },
    required: ['limit', 'offset'],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        list: { type: 'array', items: moduleData },
        total: { type: 'number' },
      },
    },
  },
};
