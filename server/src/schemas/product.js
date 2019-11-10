const product = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    type: { type: 'string' },
    desc: { type: 'string' },
    picture: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
        },
      },
    },
    price: { type: 'number' },
    delist: { type: 'number' },
  },
};

exports.getList = {
  description: 'get product list',
  querystring: {
    type: 'object',
    properties: {
      start_ts: { type: 'number' },
      end_ts: { type: 'number' },
      query: { type: 'string' },
      limit: { type: 'number' },
      offset: { type: 'number' },
    },
    required: ['limit', 'offset'],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        list: { type: 'array', items: product },
        total: { type: 'number' },
      },
    },
  },
};
