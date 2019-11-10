const env = require('./lib/env');
const config = require('config');

const { host, port } = config;

const app = require('fastify')({
  logger: true,
});

app.decorate('env', env);
app.decorate('config', config);

env.isDev && app.register(require('fastify-cors'));
app.register(require('./routes'), { prefix: '/' + env.name });
app.register(require('fastify-mongodb'), {
  forceClose: true,
  url: `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.database}`,
});

app.listen(port, host, (err, address) => {
  if (err) throw err;
  app.log.info(`server listening on ${address}`);
});

process.on('message', async function(msg) {
  if (msg !== 'shutdown') return;
  console.log('Closing all connections...');
  await app.close();
  console.log('Finished closing connections');
  process.exit(0);
});
