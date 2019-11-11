const { MODULE_SUB_MODEL_MAP, MODULE_SUB_KEY_MAP } = require('../utils/const');

exports.getPageSchema = async function(request, reply) {
  const { name } = this.env;
  const { url } = reply.context.config;
  const schemaUrl = url.replace(`${name}/app/`, '');
  const pageData = await this.models.page.getWithModuleByUrl(schemaUrl);

  // format page data to schema
  const pageSchema = pageData.modules.map(moduleData => {
    const moduleSchema = {
      type: moduleData.type,
      ...moduleData.config,
    };

    const dataKey = MODULE_SUB_KEY_MAP[moduleData.type];

    moduleSchema[dataKey] = moduleData[dataKey].map(subData => {
      const subSchema = { ...subData };
      delete subSchema._id;
      delete subSchema.id;
      return subSchema;
    });

    return moduleSchema;
  });

  reply.send(pageSchema);
};

exports.getSkeletonSchema = function(request, reply) {
  const { page } = this.config;
  reply.send(page.skeleton);
};
