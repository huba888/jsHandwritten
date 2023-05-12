Array.prototype.myMap = function (fn, thisArg) {
  let res = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    res[i] = fn.call(thisArg, this[i], i, this);
  }
  return res;
};

let arr = [1, 2, 3, 4];
console.log(arr.myMap((v, i) => v * i));
