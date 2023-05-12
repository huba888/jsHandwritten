Function.prototype.myBind = function (that, ...rest) {
  let s = Symbol();
  that[s] = this;
  return function (...args) {
    let res = that[s](...rest, ...args);
    delete that[s];
    return res;
  };
};

function foo(num, bar) {
  console.log(this.name);
  console.log(num, bar);
}

let obj = { name: "huba" };
let fn = foo.myBind(obj, 50);
fn("bar-bind");
