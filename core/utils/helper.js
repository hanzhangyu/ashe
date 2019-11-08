const helper = {
  replaceNullByUndefined(params) {
    const data = { ...params };
    Object.keys(data).forEach(key => {
      if (data[key] === null) data[key] = undefined;
    });
    return data;
  },
};

module.exports = helper;
