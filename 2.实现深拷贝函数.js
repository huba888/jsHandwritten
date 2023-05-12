// 我记得之前看到过一个面试题? 深拷贝 和 浅拷贝的区别 和 实现深拷贝的方法
const { isObject } = require("./share/isObject.js");
function deepClone(target) {
  if (!isObject(target)) {
    return target;
  }
  let copy = Array.isArray(target) ? [] : {};
  // 遍历所有key
  for (const key in target) {
    copy[key] = deepClone(target[key]);
  }
  return copy;
}

let obj = {
  name: "ikun",
  age: 27,
  friends: ["ji", "ni", "tai", "mei"],
};

console.log(deepClone(obj));

// 扩展? 解决循环引用问题 和 一些其他数据类型 (比如这个对象中有 date function symbol,对象中的一个属性 引用了自己)
