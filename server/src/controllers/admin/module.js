exports.getList = async function(request, reply) {
  const { list, total } = await this.models.module.getList(request.query);
  reply.send({ list, total });
};

exports.create = async function(request, reply) {
  await this.models.module.add(request.body);
  reply.code(204);
};
