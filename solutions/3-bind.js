// BEGIN
const bind = (obj, fn) => {
  return (...args) => {
    return fn.call(obj, ...args);
  };
};

export default bind;
// END