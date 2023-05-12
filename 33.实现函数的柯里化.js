function curry(fn) {
  return function curring(...ags) {
    if (ags.length >= fn.length) {
      return fn.apply(this, ags);
    } else {
      return function (...args) {
        return curring(...ags, ...args);
      };
    }
  };
}
function sum(num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
  return num1 + num2 + num3;
}

let fn = curry(sum);
fn(1)(2)(4, 5, 89);
fn(2, 3)(4, 5)(4);
