exports.uploadComponent = async function(request, reply) {
  const componentSchemas = request.body;
  const { db } = this.mongo;
  const collection = await db.collection('schema');
  // const id = await collection.estimatedDocumentCount();
  await collection.deleteOne({ type: 'component' });
  await collection.insertOne({
    type: 'component',
    schemas: componentSchemas,
  });
  reply.code(204);
};

exports.uploadGenerator = async function(request, reply) {
  const generatorSchemas = request.body;
  const { db } = this.mongo;
  const collection = await db.collection('schema');
  await collection.deleteOne({ type: 'generator' });
  await collection.insertOne({
    type: 'generator',
    schemas: generatorSchemas,
  });
  reply.code(204);
};

exports.uploadFramework = async function(request, reply) {
  const frameworkSchemas = request.body;
  const { db } = this.mongo;
  const collection = await db.collection('schema');
  await collection.deleteOne({ type: 'framework' });
  await collection.insertOne({
    type: 'framework',
    schemas: frameworkSchemas,
  });
  reply.code(204);
};

exports.uploadAdapter = async function(request, reply) {
  const adapterSchemas = request.body;
  const { db } = this.mongo;
  const collection = await db.collection('schema');
  await collection.deleteOne({ type: 'adapter' });
  await collection.insertOne({
    type: 'adapter',
    schemas: adapterSchemas,
  });
  reply.code(204);
};
