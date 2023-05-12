// instanceof 关键字 他的查找机制是什么?
// arr instanceof Array
// 沿着arr 的原型链去查找  看看能不能找到Array.prototype
function instanceofFn(instance, Factor) {
  let prototype = Factor.prototype;
  while (true) {
    let proto = Object.getPrototypeOf(instance);
    // 找到了Object.prototype.__proto__ 还没有找到直接返回false
    if (proto == null) return false;
    if (prototype == proto) {
      return true;
    }
    instance = proto;
  }
}

console.log(instanceofFn([], Array)); // true
console.log(instanceofFn([], Object)); // true
console.log(instanceofFn(new Date(), Array)); // false
console.log(instanceofFn(new Date(), Date)); // true
console.log(instanceofFn(new Date(), Object)); // true
