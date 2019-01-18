
export default (...args) => {
  if(args.length === 0) {
    return arg => arg;
  }
  if(args.length === 1) {
    return args[0];
  }
  return args.reduce((pre, cur) => (...funcs) => pre(cur(...funcs)));
};