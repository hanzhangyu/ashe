const helper = {
  sleep(timeout) {
    return new Promise(r => {
      setTimeout(r, timeout);
    }, timeout);
  },
  async getListFromCursor(cursor) {
    const list = [];
    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      list.push(doc);
    }
    return list;
  },

  asyncReduce(ary, reduceFunc, acc) {
    return ary.reduce(async function(asyncAcc, cur, idx, src) {
      await asyncAcc;
      return reduceFunc(acc, cur, idx, src);
    }, Promise.resolve());
  },
};

module.exports = helper;
