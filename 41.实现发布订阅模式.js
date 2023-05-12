class MyEvent {
  handlers = {};
  on(name, fn) {
    let bucket = this.handlers[name] || [];
    bucket.push(fn);
    this.handlers[name] = bucket;
  }
  emit(name, ...rest) {
    let bucket = this.handlers[name] || [];
    bucket.forEach(fn => fn(...rest));
  }
  clear() {
    this.handlers = {};
  }
  off(name, fn) {
    let bucket = this.handlers[name] || [];
    bucket = bucket.filter(v => v != fn);
    this.handlers[name] = bucket;
  }
}
let e = new MyEvent();
e.on("eat", food => {
  console.log("吃早饭", food);
});
e.on("eat", () => {
  console.log("吃晚饭");
});
let fn = () => {
  console.log("吃午饭");
};
e.on("eat", fn);
e.emit("eat");
e.off("eat", fn);
console.log("............");
e.emit("eat", "苹果");
