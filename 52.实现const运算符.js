// 不知道这题在想什么
// 在网上搜了搜,大概就是下面的意思

function myConst(key, value) {
  Object.defineProperty(window, key, {
    writable: fasle,
    value,
  });
}
myConst("obj", { a: 1 });
console.log(obj);
// 报错
obj = {};
// 这题 node 环境执行不了
