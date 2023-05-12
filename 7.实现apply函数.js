// 会call 就会apply
Function.prototype.myApply = function (that, args) {
  // 利用隐式绑定进行this替换
  let s = Symbol();
  that[s] = this;
  let res = that[s](...args);
  delete that[s];
  return res;
};

function foo(num, bar) {
  console.log(this.name);
  console.log(num, bar);
}

let obj = { name: "huba" };
foo.myApply(obj, [20, "hello"]);
