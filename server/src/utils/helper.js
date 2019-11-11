const helper = {
  sleep(timeout) {
    return new Promise(r => {
      setTimeout(r, timeout);
    }, timeout);
  },

  asyncReduce(ary, reduceFunc, acc) {
    return ary.reduce(async function(asyncAcc, cur, idx, src) {
      await asyncAcc;
      return reduceFunc(acc, cur, idx, src);
    }, Promise.resolve());
  },
};

module.exports = helper;
