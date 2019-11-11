exports.getPageSchema = async function(request, reply) {
  const { name } = this.env;
  const { url } = reply.context.config;
  const schemaUrl = url.replace(`${name}/app/`, '');
  const pageSchema = await this.models.page.getWithModuleByUrl(schemaUrl);
  reply.send(pageSchema);
};
