const page = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    url: { type: 'string' },
    presenter: { type: 'string' },
    framework: { type: 'string' },
    modules: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          link: { type: 'string' },
        },
      },
    },
  },
};

exports.getList = {
  description: 'get page list',
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
        list: { type: 'array', items: page },
        total: { type: 'number' },
      },
    },
  },
};

exports.create = {
  description: 'create page list',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      path: { type: 'string' },
      presenter: { type: 'string' },
      framework: { type: 'string' },
      modules: { type: 'array', items: { type: 'number' } },
    },
  },
};
