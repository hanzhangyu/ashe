const Product = require('./db');

module.exports = {
  async getList({
    start_ts = 0,
    end_ts = Date.now(),
    query = '',
    limit = '10',
    offset = 0,
  }) {
    const list = await Product.getList(
      ({ timestamp, name }) =>
        timestamp > start_ts && timestamp < end_ts && name.includes(query),
    );
    list.sort((a, b) => b.timestamp - a.timestamp);
    return {
      list: list.slice(offset * limit, limit),
      total: list.length,
    };
  },
  add: Product.add,
  remove: Product.remove,
};
