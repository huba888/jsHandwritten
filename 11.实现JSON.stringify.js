const { isObject } = require("./share/isObject");
// 注意细节就行
function JSONStringify(target) {
  if (typeof target == "string") {
    return `"${target}"`;
  }
  if (!isObject(target)) {
    return target;
  }
  let str = "";
  let isArr = Array.isArray(target);
  for (const key in target) {
    if (!isArr) {
      str += key + ":" + JSONStringify(target[key]) + ",";
    } else {
      str += JSONStringify(target[key]) + ",";
    }
  }
  str = str.slice(0, str.length - 1);
  if (Array.isArray(target)) {
    str = `[${str}]`;
  } else {
    str = `{${str}}`;
  }
  return str;
}
// obj 是一个标准的json字符串,否则处理不了
let obj = {
  name: "nihao",
  age: 123,
  friend: ["kobe", "james", null, true, { name: 12 }],
  sex: undefined,
  isGay: false,
  grilFriend: null,
};
console.log(JSONStringify(obj));
