// 相同输入得到相同的输出

function memoFun(fn) {
  let map = new Map();
  return function (...args) {
    let key = args.join(",");
    if (map.has(key)) return map.get(key);
    let res = fn(...args);
    map.set(key, res);
    return res;
  };
}

function add(num1, num2, num3) {
  console.log("我被执行了");
  return num1 + num2 + num3;
}

let fn = memoFun(add);
console.log(fn(1, 2, 3));
console.log(fn(1, 2, 3));
console.log(fn(1, 2, 3));
