// 这题题目不完整,但是大概应该是这样的
function add(...rest) {
  let arg = [...rest];
  let fn = function (...args) {
    arg.push(...args);
    return fn;
  };
  fn.toString = function () {
    return arg.reduce((a, b) => a + b);
  };
  return fn;
}
console.log(add(1)(2) + 1);
