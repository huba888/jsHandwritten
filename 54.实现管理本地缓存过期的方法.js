class MyStorage {
  setItem(options) {
    // 把相对时间转为绝对时间之后存入localStorage
    options.expries = Date.now() + options.expries * 1000;
    localStorage.setItem(options.key, JSON.stringify(options));
  }
  getItem(key) {
    let res = localStorage.getItem(key);
    try {
      res = JSON.parse(res);
    } catch {
      return false;
    }
    console.log(res);
    let time = res.expries;
    let now = time - Date.now();
    if (now > 0) {
      // 没过期
      return res.value;
    }
    return false;
  }
  clear() {
    localStorage.clear();
  }
  remove(key) {
    localStorage.removeItem(key);
  }
}

let s = new MyStorage();

s.setItem({
  key: "name",
  value: "huba",
  // 单位秒
  expries: 10,
});

console.log(s.getItem("name"));
