Array.prototype.myReduce = function (fn, init = 0) {
  for (let i = 0; i < this.length; i++) {
    init = fn(init, this[i], i, this);
  }
  return init;
};

let arr = [1, 2, 3, 4, 1, 2];
console.log(arr.myReduce((a, b) => a + b, 0));
