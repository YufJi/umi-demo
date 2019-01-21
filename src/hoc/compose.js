// compose function 
export default (...funcs) => {
  if(funcs.length === 0) {
    return arg => arg;
  }
  if(funcs.length === 1) {
    return funcs[0];
  }
  // direction left <- right
  return funcs.reduce((pre, cur) => (...args) => pre(cur(...args)));
};