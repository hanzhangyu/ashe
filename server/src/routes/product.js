const routes = [
  {
    url: '/hello',
    method: 'GET',
    schema: {
      response: {
        '200': {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
    handler(request, reply) {
      reply.send({ hello: 'world' });
    },
  },
];

module.exports = routes;
