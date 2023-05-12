// 对象扁平化? 没遇到过这样的需求
const { isObject } = require("./share/isObject");
let obj = {
  name: "person1",
  age: 18,
  p1: {
    name: "nihao",
    sex: "男",
    hobby: "sing",
  },
};
function flatten(target) {
  let res = {};
  function helper(target) {
    for (const key in target) {
      if (!isObject(target[key])) {
        res[key] = target[key];
      } else {
        helper(target[key]);
      }
    }
  }
  helper(target);
  return res;
}
console.log(flatten(obj));
