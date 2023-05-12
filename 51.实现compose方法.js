// 实现compose方法

function fn1(x) {
  return x * 2;
}

function fn2(x) {
  return x * 3;
}
function fn3(x) {
  return x * 4;
}
function compose(...fns) {
  return function (...args) {
    let iter = fns.values();
    let arg = iter.next().value(...args);
    for (const fn of iter) {
      arg = fn(arg);
    }
    return arg;
  };
}

let fn = compose(fn1, fn2, fn3);
console.log(fn(1));
