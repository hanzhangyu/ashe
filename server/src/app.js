const env = require('./lib/env');
const config = require('config');

const { host, port, db } = config;

const app = require('fastify')({
  logger: true,
});

app.decorate('env', env);
app.decorate('config', config);

env.isDev && app.register(require('fastify-cors'));

// IOC
app
  .register(require('./routes'), { prefix: '/' + env.name })
  .register(require('fastify-mongodb'), {
    forceClose: true,
    url: `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.database}`,
  })
  .register(require('./models'));

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
