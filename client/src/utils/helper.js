const _toString = Object.prototype.toString;

const simpleCheckRE = /^(string|number|boolean)$/;

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

export function assertSchema(value, schema) {
  let valid;
  const { type, items } = schema;
  if (simpleCheckRE.test(type)) {
    const t = typeof value;
    valid = t === type;
  } else if (type === 'object') {
    valid = isPlainObject(value);
    // TODO walk object, ... 我去我这是要写 JSON schema 验证吗？ 我为什么不用 AJV
  } else if (type === 'array') {
    valid = Array.isArray(value);
    if (valid && items) {
      // walk array
      valid = !value.map(item => assertSchema(item, items)).includes(false);
    }
  }
  return valid;
}
