// 节流函数: 触发多次,单位时间内只会执行一次
function throttle(fn, interval) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      timer = null;
    }, interval);
  };
}
