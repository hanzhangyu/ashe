const viewRoutes = [
  {
    url: '/app/skeleton',
    method: 'GET',
    handler(request, reply) {
      const { page } = this.config;
      reply.send(page.skeleton);
    },
  },
];

module.exports = viewRoutes;
