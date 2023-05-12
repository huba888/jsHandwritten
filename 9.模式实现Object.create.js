Object.myCreate = function (prototype) {
  function Fn() {}
  Fn.prototype = prototype;
  return new Fn();
};

let obj = Object.myCreate({ name: "huba" });
console.log(obj.name);
