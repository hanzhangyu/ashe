const _toString = Object.prototype.toString;

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

export function assertSchema(value, schema) {
  let valid;
  const { type, items } = schema;
  const expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
    // TODO walk object, ... 我去我这是要写 JSON schema 验证吗？ 我为什么不用 AJV
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
    if (valid && items) {
      // walk array
      valid = !value.map(item => assertSchema(item, items)).includes(false);
    }
  } else {
    valid = value instanceof type;
  }
  return valid;
}
