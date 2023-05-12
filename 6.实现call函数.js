Function.prototype.myCall = function (that, ...rest) {
  // 利用隐式绑定进行this替换
  let s = Symbol();
  that[s] = this;
  let res = that[s](...rest);
  delete that[s];
  return res;
};

function foo(num, bar) {
  console.log(this.name);
  console.log(num, bar);
}

let obj = { name: "huba" };
foo.myCall(obj, 10, "bar");
