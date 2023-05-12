// loadash 中的一个方法 比较两个对象是否相等
function isEqual(obj1, obj2) {
  for (const key in obj1) {
    if (obj2[key] !== obj1[key]) return false;
  }
  for (const key in obj2) {
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
}

let obj1 = {
  name: "huba",
  age: 18,
};
let obj2 = {
  name: "huba",
  age: 18,
  sex: "man",
};
console.log(isEqual(obj1, obj2));
