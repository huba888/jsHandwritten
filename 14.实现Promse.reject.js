Promise.myReject = function (value) {
  return new Promise((_, reject) => reject(value));
};
let p = Promise.myReject("nihao").then(
  val => console.log("val", val),
  reason => console.log("reason", reason)
);
