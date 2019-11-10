const { db: dbConfig } = require('config');
const MongoClient = require('mongodb').MongoClient;
const readline = require('readline');
const demoProduct = require('../data/product');

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
  let answer;
  await client.connect();

  const db = client.db('ashe');
  const collectionNames = await db.listCollections().toArray();
  if (collectionNames.length > 0) {
    answer = await ask('该数据库已被占用，是否重置？（Y/N）');
    if (answer.toUpperCase() === 'N') return;
    for (let i = 0; i < collectionNames.length; i++) {
      await db.dropCollection(collectionNames[i].name);
    }
  }
  const collection = await db.collection('product');
  await collection.insertMany(demoProduct);
  collection.createIndex({ id: 1 }, { unique: true, name: 'id' });
  console.log('插入默认产品成功！');
}

main().finally(() => {
  client.close();
});
