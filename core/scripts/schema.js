/**
 * @file collect the domain schema for page creator
 */
import path from 'path';
import fs from 'fs';
import http from 'http';

const FRAMEWORK_PATH = path.resolve(__dirname, '../src/frameworks');
const ADAPTER_PATH = path.resolve(__dirname, '../src/adapters');

function getFileList(dir, extReg = /\.js$/) {
  const fileNames = fs.readdirSync(dir);
  return fileNames.filter(fileName => extReg.test(fileName));
}

// 可以提供一个 @ashe/share 的库
function simpleRequest(url, body) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http
      .request(url, options, function(res) {
        if (res.statusCode === 204) resolve();
        else reject(`未知返回值： ${res.statusCode}`);
      })
      .on('error', e => {
        reject(`出现错误: ${e.message}`);
      });

    req.write(JSON.stringify(body));
    req.end();
  });
}

/**
 *  收集框架 ['vuex']
 */
function collectFrameworkSchema() {
  const fileNames = getFileList(FRAMEWORK_PATH);
  return fileNames.map(filename => filename.replace('.js', ''));
}

/**
 * 收集所有框架对应的适配器中的 getter/action
 */
function collectionAdapterSchema(frameworks) {
  return frameworks.reduce((adapterDict, framework) => {
    const adapterCurrentFrameworkDict = (adapterDict[framework] = {});
    const adapterModulePath = path.resolve(ADAPTER_PATH, framework);
    const fileNames = getFileList(adapterModulePath, /\.schema\.js$/);
    fileNames.forEach(fileName => {
      const { default: adapter } = require(path.resolve(
        adapterModulePath,
        fileName,
      ));
      const adapterName = fileName.replace('.schema.js', '');
      adapterCurrentFrameworkDict[adapterName] = adapter;
    });
    return adapterDict;
  }, {});
}

const frameworks = collectFrameworkSchema();
const adapterDict = collectionAdapterSchema(frameworks);

async function main() {
  await simpleRequest(
    'http://localhost:3000/ashe/api/admin/schema/framework',
    frameworks,
  );
  console.log('🚀Upload frameworks success');

  await simpleRequest(
    'http://localhost:3000/ashe/api/admin/schema/adapter',
    adapterDict,
  );
  console.log('🚀Upload adapters success');
}

main();
