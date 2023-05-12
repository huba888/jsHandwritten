Promise.myResolve = function (value) {
  return new Promise(resolve => resolve(value));
};
let p = Promise.myResolve("nihao").then(
  val => console.log("val", val),
  reason => console.log("reason", reason)
);
