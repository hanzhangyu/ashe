module.exports = ['page', 'module', 'column', 'field', 'schema']
  .map(moduleName => {
    return require(`./${moduleName}`);
  })
  .flat();
