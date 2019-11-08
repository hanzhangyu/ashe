const Product = require('../models/product');

exports.getList = async function(request, reply) {
  // console.log(this.getSchemas());
  // console.log(this.schema);
  // console.log(this.config);
  // console.log(reply.context.config);
  const { list, total } = await Product.getList(request.query);
  reply.send({ list, total });
};

exports.create = async function(request, reply) {
  await Product.add(request.body);
  reply.code(204);
};
