// 方法一: Array.from()
let arr = { 0: "", 1: "", 2: "你好", length: 3 };
let res1 = Array.from(arr);
console.log(res1);
// 方法二 :
//通过call调用数组的slice方法来实现转换
let res2 = Array.prototype.slice.call(arr);
console.log(res2);
// 方法三:
//通过call调用数组的splice方法来实现转换
let res3 = Array.prototype.splice.call(arr, 0);
console.log(res3);
// 方法四: 如果是可迭代的类数组,可以进行 展开运算符 如:argument
void (function () {
  let arr = [...arguments];
  console.log(arr);
})(1, 2, 3, 4, 5);
