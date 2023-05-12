const arr = [];
Array.myIsArray = function (target) {
  return Object.prototype.toString.call(target) == "[object Array]";
};

console.log(Array.myIsArray([]));
console.log(Array.myIsArray({}));
console.log(Array.myIsArray(new Date()));
console.log(Array.myIsArray([1, 234]));
