let data = {
  msg: "hello",
};

let d = {};
Object.defineProperty(d, "msg", {
  get(key) {
    // 依赖收集
    return data[key];
  },
  set(value) {
    // Todo 触发更新
    data["msg"] = value;
  },
});
