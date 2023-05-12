// 回顾new 操作符号做了什么事情?
// 1. 创建一个空对象
// 2. 让构造函数中的this指向这个空对象
// 3. 执行构造函数中的代码
// 4. 如果没有显示返回一个对象,就返回我们自己创建的这个对象
function myNew(cst, ...rest) {
  // 下面两行代码可以写成 let obj = Object.create(cst.prototype)
  let obj = {};
  Object.setPrototypeOf(obj, cst.prototype);
  let res = cst.call(obj, ...rest);
  return res instanceof Object ? res : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.test = "nihao";
let obj = myNew(Person, "huba", 18);
console.log(obj);
console.log(obj.test); // nihao
