/**
 * @file collect the component`s schema for page creator
 */
import path from 'path';
import fs from 'fs';
import http from 'http';

const KEY_MAP = {
  form: 'field',
  table: 'column',
};

/**
 *  收集组件 schema
 *    {
 *      form/table: {
 *        组件名: {组件 field 字段: 该字段 schema}},
 *        PHInput: {model: {type: String, required: true}}, // form 的 field 例子
 *        TableOperation: {deleteAction: {type: String, required: true}}, // table 的 column 例子
 *      }
 *    }
 */
async function collectComponentSchema(dir, type, schemas) {
  const fileNames = fs.readdirSync(dir);
  const schemaFileNames = fileNames.filter(fileName =>
    /\.schema\.js$/.test(fileName),
  );
  const compSchema = {};
  await Promise.all(
    schemaFileNames.map(async schemaFileName => {
      const { default: componentSchema } = await import(
        path.resolve(dir, schemaFileName)
      );
      compSchema[componentSchema.name] =
        componentSchema.propsSchema[KEY_MAP[type]];
    }),
  );
  schemas[type] = compSchema;
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

async function main() {
  const clientComponentSchema = {};
  await collectComponentSchema(
    path.resolve(__dirname, '../src/components/form/base'),
    'form',
    clientComponentSchema,
  );
  await collectComponentSchema(
    path.resolve(__dirname, '../src/components/table/base'),
    'table',
    clientComponentSchema,
  );

  await simpleRequest(
    'http://localhost:3000/ashe/api/admin/schema/component',
    clientComponentSchema,
  );

  console.log('🚀Upload component success');

  const { default: formSchema } = await import(
    path.resolve(__dirname, '../src/components/form/FormGenerator.schema.js')
  );
  const { default: tableSchema } = await import(
    path.resolve(__dirname, '../src/components/table/TableGenerator.schema.js')
  );

  const generatorSchema = {
    form: formSchema.propsSchema.schema,
    table: tableSchema.propsSchema.schema,
  };

  await simpleRequest(
    'http://localhost:3000/ashe/api/admin/schema/generator',
    generatorSchema,
  );

  console.log('🚀Upload generator success');
}

main();
