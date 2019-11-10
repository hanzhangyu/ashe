exports.uploadComponent = async function(request, reply) {
  const componentSchemas = request.body;
  console.log(componentSchemas);
  reply.code(204);
};

exports.uploadGenerator = async function(request, reply) {
  const generatorSchemas = request.body;
  console.log(generatorSchemas);
  reply.code(204);
};
