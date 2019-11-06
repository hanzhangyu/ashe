const helper = {
  sleep(timeout) {
    return new Promise(r => {
      setTimeout(r, timeout);
    }, timeout);
  },
};
