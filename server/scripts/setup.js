const { db: dbConfig } = require('config');
const MongoClient = require('mongodb').MongoClient;
const readline = require('readline');

const DEFAULT_DATA = [
  {
    key: 'product',
    name: '产品',
  },
  {
    key: 'page',
    name: '页面',
    indexs: ['id', 'url'],
  },
  {
    key: 'module',
    name: '模块',
  },
  {
    key: 'field',
    name: '表单域',
  },
  {
    key: 'column',
    name: '表格列',
  },
  {
    key: 'schema',
    name: '协议',
    indexs: ['type'],
  },
];

const client = new MongoClient(
  `mongodb://${dbConfig.user}:${dbConfig.pwd}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const ask = question =>
  new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });

async function main() {
  let answer, collection;
  await client.connect();
  const db = client.db('ashe');

  // check db is empty
  const collectionNames = await db.listCollections().toArray();
  if (collectionNames.length > 0) {
    answer = await ask('该数据库已被占用，是否重置？（Y/N）');
    if (answer.toUpperCase() === 'N') return;
    for (const { name } of collectionNames[Symbol.iterator]()) {
      await db.dropCollection(name);
    }
  }

  // insert initial data
  for (const { key, name, indexs = ['id'] } of DEFAULT_DATA[Symbol.iterator]()) {
    const demoData = require('../data/' + key);
    collection = await db.collection(key);
    await collection.insertMany(demoData);
    indexs.forEach(indexName => {
      collection.createIndex(
        { [indexName]: 1 },
        { unique: true, name: indexName },
      );
    });
    console.log(`插入默认${name}成功！`);
  }
}

main().finally(() => {
  client.close();
});
