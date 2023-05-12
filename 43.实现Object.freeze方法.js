// Object.freeze();
// 不能修改属性,添加属性,删除属性,不能修改原型,不能修改属性描述符
// 这个和上面那个差不多,但是可以修改已有的属性
// Object.seal()

let obj = {
  name: "huba",
};
Object.myFreeze = function (obj) {
  if (typeof obj !== "object") return;
  Object.defineProperty(obj, "__proto__", {
    value: Object.getPrototypeOf(obj),
    configurable: false,
    writable: false,
  });
  Object.preventExtensions(obj);
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      value: obj[key],
      configurable: false,
      writable: false,
    });
  }
};
Object.myFreeze(obj);
// 禁止修改
obj.name = 10;
// 禁止删除
delete obj.name;
// 禁止添加
obj.age = "nihao";
// 禁止修改原型
obj.__proto__ = {};

console.log(obj);
console.log(obj.__proto__);
